<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\Post;
use App\Models\User;
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

        $user = User::select('id')->where('email', 'WyomingCPA@yandex.ru')->first();
        $favorite_ids = $user->queuesPost->pluck('id')->toArray();
        $favorite_sexy_tumblr_video_count  =  Post::where('is_publish', false)
            ->where('owner_id', 213)
            ->where('type', 'video')
            ->where('network', 'tumblr')
            ->where('is_hidden', false)
            ->whereIn('id', $favorite_ids)
            ->orderBy('created_at', 'desc')->count();

        $favorite_sexy_tumblr_photo_count = Post::where('is_publish', false)
            ->where('owner_id', 213)
            ->where('type', 'photo')
            ->where('network', 'tumblr')
            ->where('is_hidden', false)
            ->whereIn('id', $favorite_ids)
            ->orderBy('created_at', 'desc')->count();

        $favorite_anime_tumblr_photo_count = Post::where('is_publish', false)
            ->where('owner_id', 313)
            ->where('type', 'photo')
            ->where('network', 'tumblr')
            ->where('is_hidden', false)
            ->whereIn('id', $favorite_ids)
            ->orderBy('created_at', 'desc')->count();

        $favorite_cats_tumblr_video_count = Post::where('is_publish', false)
            ->where('owner_id', 113)
            ->where('type', 'video')
            ->where('network', 'tumblr')
            ->where('is_hidden', false)
            ->whereIn('id', $favorite_ids)
            ->orderBy('created_at', 'desc')->count();

        $favorite_sexy_telegramm_photo_count = Post::where('is_publish', false)
            ->where('owner_id', 213)
            ->where('type', 'photo')
            ->where('network', 'telegramm')
            ->where('is_hidden', false)
            ->whereIn('id', $favorite_ids)
            ->orderBy('created_at', 'desc')->count();

        $favorite_sexy_telegramm_video_count = Post::where('is_publish', false)
            ->where('owner_id', 213)
            ->where('type', 'video')
            ->where('network', 'telegramm')
            ->where('is_hidden', false)
            ->whereIn('id', $favorite_ids)
            ->orderBy('created_at', 'desc')->count();

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
            'favorite_sexy_tumblr_video_count' => $favorite_sexy_tumblr_video_count,
            'favorite_sexy_tumblr_photo_count' => $favorite_sexy_tumblr_photo_count,
            'favorite_anime_tumblr_photo_count' => $favorite_anime_tumblr_photo_count,
            'favorite_cats_tumblr_video_count' => $favorite_cats_tumblr_video_count,
            'favorite_sexy_telegramm_video_count' => $favorite_sexy_telegramm_video_count,
            'favorite_sexy_telegramm_photo_count' => $favorite_sexy_telegramm_photo_count,
        ], 200);
    }
}
