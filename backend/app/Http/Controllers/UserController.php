<?php

namespace App\Http\Controllers;

use App\Exceptions\ApiException;
use App\Requests\User\LoginRequest;
use App\Requests\User\RegistrationRequest;
use App\Requests\User\UpdateRequest;
use App\Resources\UserResource;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function user() {
        return UserResource::collection([auth()->user()]);
    }

    public function login(LoginRequest $request)
    {
        $credentials = $request->only('login', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $token = $user->createToken('authToken')->plainTextToken;
            return response()->json(['token' => $token]);
        }

        throw new ApiException(401, 'Authentication failed');
    }

    public function logout()
    {
        Auth::user()->tokens()->delete();
        return response()->json(['message' => 'Successfully logged out']);
    }

    public function register(RegistrationRequest $request)
    {
        $user = User::create([
            ...$request->all(),
            'password' => Hash::make($request->password),
        ]);

        return response()->json([
            'data' => [
                'id' => $user->id,
                'status' => 'created'
            ]
        ])->setStatusCode(200, 'Created');
    }

    public function remove($id) {
        User::find($id)->delete();

        return response()->json([
            'data' => [
                'id' => $id,
                'status' => 'removed'
            ]
        ])->setStatusCode('200', "Removed");
    }

    public function update(UpdateRequest $request, $id) {
        User::find($id)->update($request->all());

        return response()->json([
            'data' => [
                'id' => $id,
                'status' => 'updated'
            ]
        ])->setStatusCode('200', "Updated");
    }
}
