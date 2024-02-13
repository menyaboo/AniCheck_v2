<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Note
 *
 * @property int $id
 * @property int $user_id
 * @property int $category_note_id
 * @property int $anime_id
 *
 * @property CategoryNote $categoryNote
 */
class Note extends Model
{
    protected $fillable = [
        'user_id',
        'category_note_id',
        'anime_id',
    ];

    public function categoryNote(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(CategoryNote::class);
    }
}
