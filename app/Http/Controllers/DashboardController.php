<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\Post;
use App\Models\Category;
use Carbon\Carbon;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        $total_all_post_count = Post::all()->count();
        $all_publish_post_count = Post::where('is_publish', true)->get()->count();
        $all_hide_post_count = Post::where('is_hidden', true)->get()->count();
        $add_today_post_count = Post::whereDate('created_at', Carbon::today())->get()->count(); 

        $favorite_estetic_post_count = Post::queueCount('estetic_vibes');
        $favorite_sexy_post_count  = Post::queueCount('sexy');
        $favorite_anime_post_count = Post::queueCount('anime');
        $favorite_cats_post_count = Post::queueCount('cats');

        //$date = Carbon::now()->subDays(7);
        //$statistics = Statistics::where('created_at', '>=', $date)->orderBy('created_at', 'desc')->get();
        return response([
            'total_all_post_count' => $total_all_post_count,
            'all_publish_post_count' => $all_publish_post_count,
            'all_hide_post_count' => $all_hide_post_count,
            'add_today_post_count' => $add_today_post_count,
            'favorite_anime_post_count' => $favorite_anime_post_count, 
            'favorite_sexy_post_count' => $favorite_sexy_post_count,
            'favorite_estetic_post_count' => $favorite_estetic_post_count,
            'favorite_cats_post_count' => $favorite_cats_post_count,
        ], 200);
    }
}
