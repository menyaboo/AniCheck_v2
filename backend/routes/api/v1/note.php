<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::controller(\App\Http\Controllers\NoteController::class)->prefix('notes')->group(function () {
    Route::middleware('auth:sanctum')->get('/',  'index');
    Route::middleware('auth:sanctum')->get('/{category_code}',  'getForCategory');
    Route::middleware('auth:sanctum')->post('/store',  'store');
});
