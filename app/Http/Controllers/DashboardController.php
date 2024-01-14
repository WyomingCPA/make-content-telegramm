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

        //Избранное Anime

        $favorite_ids = $favorite_ids = Auth::user()->queuesPost->pluck('id')->toArray();
        $objects = Post::where('is_publish', false)->where('is_hidden', false)->whereIn('id', $favorite_ids)->orderBy('created_at', 'desc');
        $category_value = ['anime'];
        $category_ids = Category::whereIn('name', $category_value)->pluck('id')->toArray();
        $objects->whereHas('categories', function ($query) use ($category_ids) {
            $query->whereIn('category_id', array_values($category_ids));
        });
        $favorite_anime_post_count = $objects->count();
        //$date = Carbon::now()->subDays(7);
        //$statistics = Statistics::where('created_at', '>=', $date)->orderBy('created_at', 'desc')->get();
        return response([
            'total_all_post_count' => $total_all_post_count,
            'all_publish_post_count' => $all_publish_post_count,
            'all_hide_post_count' => $all_hide_post_count,
            'add_today_post_count' => $add_today_post_count,
            'favorite_anime_post_count' => $favorite_anime_post_count, 
        ], 200);
    }
}
