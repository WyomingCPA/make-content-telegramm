<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Carbon\Carbon;

class Post extends Model
{
    use HasFactory;

    protected $casts = [
        'attachments' => 'array'
    ];

    protected $fillable = [
        'post_id',
        'owner_id',
        'text',
        'link',
        'attachments',
        'is_publish',
        'is_hidden',
    ];

    public function getCreatedAtAttribute($value)
    {
        return Carbon::parse($value)->format('H:i:s j F Y');
    }
    
    public function categories()
    {
        return $this->belongsToMany(Category::class, 'category_post', 'post_id');
    }
}
