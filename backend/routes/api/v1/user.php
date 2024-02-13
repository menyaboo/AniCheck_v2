<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


//login / logout / reg
Route::controller(\App\Http\Controllers\UserController::class)->prefix('user')->group(function () {
    Route::post('/register', 'register');
    Route::post('/login',  'login');
    Route::middleware('auth:sanctum')->get('/logout',  'logout');
    Route::middleware('auth:sanctum')->delete('/remove',  'remove');
    Route::middleware('auth:sanctum')->patch('/update',  'update');
    Route::middleware('auth:sanctum')->get('/user', 'user');
});



