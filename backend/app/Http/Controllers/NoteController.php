<?php

namespace App\Http\Controllers;

use App\Models\CategoryNote;
use App\Models\Note;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class NoteController extends Controller
{
    public function index()
    {
        return Note::all();
    }

    public function getForCategory($categoryCode)
    {
        $notes = Note::whereHas('categoryNote', function($query) use ($categoryCode) {
            $query->where('code', $categoryCode);
        })->get();

        return response()->json($notes);
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'category_note_id' => ['required', 'integer'],
            'anime_id' => ['required', 'integer'],
        ]);

        $userId = Auth::id();
        $data = array_merge($validatedData, ['user_id' => $userId]);
        return Note::create($data);
    }

    public function show(Note $note)
    {
        return $note;
    }

    public function destroy(Note $note)
    {
        $note->delete();

        return response()->json();
    }
}
