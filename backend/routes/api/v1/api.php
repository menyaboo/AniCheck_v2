<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

require base_path('routes/api/v1/user.php');
require base_path('routes/api/v1/note.php');
require base_path('routes/api/v1/category-notes.php');

Route::get('/', function () {
    return response()->json(['message' => 'Hello World!']);
});
