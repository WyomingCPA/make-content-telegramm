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

        //Очередь Anime
        $favorite_ids = $favorite_ids = Auth::user()->queuesPost->pluck('id')->toArray();
        $anime_object = Post::where('is_publish', false)->where('is_hidden', false)->whereIn('id', $favorite_ids)->orderBy('created_at', 'desc');
        $category_value = ['anime'];
        $category_ids = Category::whereIn('name', $category_value)->pluck('id')->toArray();
        $anime_object->whereHas('categories', function ($query) use ($category_ids) {
            $query->whereIn('category_id', array_values($category_ids));
        });
        $favorite_anime_post_count = $anime_object->count();

        //Очередь sexy
        $sexy_object = Post::where('is_publish', false)->where('is_hidden', false)->whereIn('id', $favorite_ids)->orderBy('created_at', 'desc');
        $category_value = ['sexy'];
        $category_ids = Category::whereIn('name', $category_value)->pluck('id')->toArray();
        $sexy_object->whereHas('categories', function ($query) use ($category_ids) {
            $query->whereIn('category_id', array_values($category_ids));
        });
        $favorite_sexy_post_count = $sexy_object->count();

        //Очередь Estetic Vibes
        $estetic_object = Post::where('is_publish', false)->where('is_hidden', false)->whereIn('id', $favorite_ids)->orderBy('created_at', 'desc');
        $category_value = ['estetic_vibes'];
        $category_ids = Category::whereIn('name', $category_value)->pluck('id')->toArray();
        $estetic_object->whereHas('categories', function ($query) use ($category_ids) {
            $query->whereIn('category_id', array_values($category_ids));
        });
        $favorite_estetic_post_count = $estetic_object->count();
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
        ], 200);
    }
}
