<?php

namespace App\Http\Controllers;

use App\Models\CategoryNote;
use Illuminate\Http\Request;

class CategoryNoteController extends Controller
{
    public function index()
    {
        return CategoryNote::all();
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => ['required'],
            'code' => ['required'],
        ]);

        return CategoryNote::create($data);
    }

    public function show(CategoryNote $categoryNote)
    {
        return $categoryNote;
    }

    public function update(Request $request, CategoryNote $categoryNote)
    {
        $data = $request->validate([
            'name' => ['required'],
            'code' => ['required'],
        ]);

        $categoryNote->update($data);

        return $categoryNote;
    }

    public function destroy(CategoryNote $categoryNote)
    {
        $categoryNote->delete();

        return response()->json();
    }
}
