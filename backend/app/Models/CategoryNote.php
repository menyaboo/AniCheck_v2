<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

/**
 * Class CategoryNote
 *
 * @property int $id
 * @property string $name
 * @property string $code
 *
 * @property  Note[] $notes
 */
class CategoryNote extends Model
{
    protected $fillable = [
        'name',
        'code',
    ];

    public function notes(): \Illuminate\Database\Eloquent\Relations\HasMany {
        return $this->hasMany(Note::class);
    }
}
