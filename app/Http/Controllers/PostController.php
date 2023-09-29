<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use TelegramBot\Api\BotApi;

use App\Models\RssItem;
use App\Models\Category;

class PostController extends Controller
{
    public function rssHabrAll(Request $request)
    {
        $publish_habr = $request->get('publish_habr');

        if ($publish_habr !== null) {
            $objects = RssItem::where('is_publish', true)->orderBy('created_at', 'desc');
        }
        else {
            $objects = RssItem::where('is_publish', null)->orderBy('created_at', 'desc');
        }

        $categories = Category::pluck('name')->toArray();
        $count = $objects->count();
        $sort = $request->get('sort');
        $direction = $request->get('direction');
        $name = $request->get('title');
        $category_value = $request->get('category_value');
        $created_by = $request->get('created_by');
        $type = $request->get('type');
        $limit = 20;
        $page = (int) $request->get('page');
        $created_at = $request->get('created_at');
        
        if ($name !== null) {
            $objects->where('title', 'like', '%' . $name['searchTerm'] . '%');
        }
        if ($category_value !==null)
        {
            $category_ids = Category::whereIn('name', $category_value)->pluck('id')->toArray();

            $objects->whereHas('categories', function ($query) use ($category_ids, $request) {
                $query->whereIn('category_id', array_values($category_ids));
            });
        }
        $objects->offset($limit * ($page - 1))->limit($limit);
        if ($request->isMethod('post')) {
            return response()->json([
                'posts' => $objects->get()->toArray(),
                'count' => $count,
                'perPage' => $limit,
                'categories' => $categories
            ]);
        }
    }

    public function rssHabrPublish(Request $request)
    {
        $rows = $request->post('selRows');
        $select = [];
        foreach ($rows as $value) {
            //$select[] = $value['id'];
            $post = RssItem::findOrFail($value['id']);
            $categories = $post->categories;
            $tags = '';
            foreach ($categories as $item_category)
            {
                $tags .= "#" . $item_category->name . " ";
            }
            $messageText = $post->title . "\n";
            $messageText .= "\n";
            $messageText .= $post->link . "\n";
            $messageText .= "\n";
            $messageText .= $tags;

            $chatId = '-1001723315292';
            //$chatId = '-414528593';
            $bot = new BotApi(env('TELEGRAM_TOKEN'));
            $bot->sendMessage($chatId, $messageText, 'HTML');
            $post->is_publish = true;
            $post->save();  
        }

        return response()->json([
            'status' => true,
        ], 200);
    }
}
