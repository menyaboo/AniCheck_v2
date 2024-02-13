<?php

namespace App\Requests\User;

use App\Requests\ApiRequest;

class UpdateRequest extends ApiRequest
{
    public function rules(): array
    {
        return [
            'name' => 'string|max:32',
            'login' => 'unique:user|string|max:32',
            'password' => 'string|max:32|min:6',
            'status' => 'string',
            'image' => 'string',
        ];
    }
}
