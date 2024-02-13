<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

//login / logout / reg
Route::controller(\App\Http\Controllers\CategoryNoteController::class)->prefix('category-notes')->group(function () {
    Route::get('/',  'index');
});
