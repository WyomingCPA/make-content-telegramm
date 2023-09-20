<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RssItem extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'body',
        'description',
        'link',
        'pubDate'
    ];
    public function categories()
    {
        return $this->belongsToMany(Category::class, 'category_post', 'post_id');
    }

}