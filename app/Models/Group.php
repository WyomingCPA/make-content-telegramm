<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Carbon\Carbon;

class Group extends Model
{
    use HasFactory;

    protected $fillable = ['is_start', 'url_group'];
    protected $appends = ['count_source', 'last_view_post_telegramm'];

    public function getUpdatedAtAttribute($value)
    {
        return Carbon::parse($value)->format('H:i:s j F Y');
    }

    public function source()
    {
        return $this->belongsToMany(Source::class, 'source', 'group_id')->withTimeStamps();
    }
    public function getCountSourceAttribute()
    {
        $count = Source::where('groups_id', '=', $this->id)->count();
        return $count;
    }

    public function getLastViewPostTelegrammAttribute()
    {
        $count_view = Views::select('last_post_view')->where('groups_id', $this->id)->orderBy('id', 'desc')->first();
        if (!is_null($count_view))
        {
            return $count_view->last_post_view;
        }
        else
        {
            return 0;
        }
        
    }
}
