<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoryNoteSeeder extends Seeder
{
    public function run(): void
    {
        $statuses = [
            ['name' => 'Просмотренно', 'code' => 'viewed'],
            ['name' => 'В планах', 'code' => 'planned'],
            ['name' => 'Заброшенно', 'code' => 'abandoned'],
            ['name' => 'Избранное', 'code' => 'favorite'],
            ['name' => 'Смотрю', 'code' => 'watching'],
        ];

        foreach ($statuses as $status) {
            DB::table('category_notes')->insert([
                'name' => $status['name'],
                'code' => $status['code'],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
