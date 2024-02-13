<?php

namespace App\Requests\User;

use App\Requests\ApiRequest;

class RegistrationRequest extends ApiRequest
{
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:32',
            'login' => 'required|unique:users,login|string|max:32',
            'password' => 'required|string|min:6',
            'image' => 'string',
        ];
    }
}
