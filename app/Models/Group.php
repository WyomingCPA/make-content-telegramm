<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Carbon\Carbon;

class Group extends Model
{
    use HasFactory;

    protected $fillable = ['is_start', 'url_group'];

    public function getUpdatedAtAttribute($value)
    {
        return Carbon::parse($value)->format('H:i:s j F Y');
    }

    public function source()
    {
        return $this->belongsToMany(Source::class, 'source', 'group_id')->withTimeStamps();
    }
}
