<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AdsPost extends Model
{
    protected $table = 'ads_posts';

    protected $fillable = [
        'title',
        'text',
        'buttons',
    ];

    protected $casts = [
        'buttons' => 'array', // чтобы Laravel сам преобразовывал JSON в массив
    ];
}