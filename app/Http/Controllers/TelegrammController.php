<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Category;
use App\Models\Post;


use TelegramBot\Api\BotApi;
use TelegramBot\Api\Types\InputMedia\InputMediaPhoto;
use TelegramBot\Api\Types\InputMedia\ArrayOfInputMedia;

use Tumblr\API\Client;



class TelegrammController extends Controller
{
    public function sexyPhotoAll(Request $request)
    {
        $favorite_ids = Auth::user()->queuesPost->pluck('id')->toArray();
        $objects = Post::where('is_publish', false)->where('is_hidden', false)
            ->where('network', 'telegramm')
            ->where('type', 'photo')
            ->where('owner_id', 213)
            ->whereNotIn('id', $favorite_ids)
            ->orderBy('created_at', 'desc');
        //$test = Post::whereJsonLength('attachments', '>', 0)->get();
        $categories = Category::pluck('name')->toArray();
        $count = $objects->count();

        $categories = Category::pluck('name')->toArray();
        $count = $objects->count();

        $limit = 50;
        $page = (int) $request->get('page');
        $objects->offset($limit * ($page - 1))->limit($limit);
        if ($request->isMethod('post')) {

            return response()->json([
                'posts' => $objects->get()->toArray(),
                'count' => $count,
                'categories' => $categories
            ]);
        }
    }
}
