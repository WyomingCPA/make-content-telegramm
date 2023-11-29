<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use TelegramBot\Api\BotApi;
use TelegramBot\Api\Types\InputMedia\InputMediaPhoto;
use \TelegramBot\Api\Types\InputMedia\ArrayOfInputMedia;

use Tumblr\API\Client;

use App\Models\RssItem;
use App\Models\Post;
use App\Models\Category;

class PostController extends Controller
{
    public function rssHabrAll(Request $request)
    {
        $publish_habr = $request->get('publish_habr');

        if ($publish_habr !== null) {
            $objects = RssItem::where('is_publish', true)->orderBy('created_at', 'desc');
        } else {
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
        if ($category_value !== null) {
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

    public function postHidden(Request $request)
    {
        $rows = $request->post('selRows');
        $select = [];
        foreach ($rows as $value) {
            $post = Post::findOrFail($value['id']);
            $post->is_hidden = true;
            $post->save();
        }

        return response()->json([
            'status' => true,
        ], 200);
    }
    public function tumblrAnimePublish(Request $request)
    {
        $consumerKey = '';
        $consumerSecret = '';
        $rows = $request->post('selRows');
        $select = [];
        $client = new Client($consumerKey, $consumerSecret);
        $client->setToken($token, $tokenSecret);
        foreach ($rows as $value) {
        }
        return response()->json([
            'status' => true,
        ], 200);
    }
    public function vkSexyPublish(Request $request)
    {
        $rows = $request->post('selRows');
        $select = [];
        foreach ($rows as $value) {
            $messageText = '';
            //$select[] = $value['id'];
            $post = Post::findOrFail($value['id']);
            $categories = $post->categories;
            $list_img = $post->attachments;
            $tags = '';
            foreach ($categories as $item_category) {
                $tags .= "#" . $item_category->name . " ";
            }
            $messageText .= "\n";
            $messageText .= $tags;
            if (!empty($messageText)) {
                $chatId = '-1001866603682';
                //$chatId = '-414528593';
                $bot = new BotApi(env('TELEGRAM_TOKEN'));
                //$bot->sendMessage($chatId, $messageText, 'HTML');

                $media = new ArrayOfInputMedia();
                foreach ($list_img as $img) {
                    foreach ($img as $item_image) {
                        $media->addItem(new InputMediaPhoto($item_image, '#sexy'));
                    }
                }
                $bot->sendMediaGroup($chatId, $media);
                $post->is_publish = true;
                $post->save();
            }
        }
        return response()->json([
            'status' => true,
        ], 200);
    }
    public function vkAnimePublish(Request $request)
    {
        $rows = $request->post('selRows');
        $select = [];
        foreach ($rows as $value) {
            $messageText = '';
            //$select[] = $value['id'];
            $post = Post::findOrFail($value['id']);
            $categories = $post->categories;
            $list_img = $post->attachments;
            $tags = '';
            foreach ($categories as $item_category) {
                $tags .= "#" . $item_category->name . " ";
            }
            $messageText .= "\n";
            $messageText .= $tags;
            if (!empty($messageText)) {
                $chatId = '-1001771871700';
                //$chatId = '-414528593';
                $bot = new BotApi(env('TELEGRAM_TOKEN'));
                //$bot->sendMessage($chatId, $messageText, 'HTML');

                $media = new ArrayOfInputMedia();
                foreach ($list_img as $img) {
                    foreach ($img as $item_image) {
                        $media->addItem(new InputMediaPhoto($item_image, '#anime'));
                    }
                }
                $bot->sendMediaGroup($chatId, $media);
                $post->is_publish = true;
                $post->save();
            }
        }
        return response()->json([
            'status' => true,
        ], 200);
    }
    public function vkAnimeRelease(Request $request)
    {
        $objects = Post::where('is_publish', true)->where('is_hidden', false)->orderBy('created_at', 'desc');
        $categories = Category::pluck('name')->toArray();
        $count = $objects->count();
        $sort = $request->get('sort');
        $direction = $request->get('direction');
        $name = $request->get('title');
        $category_value = ['anime'];
        $created_by = $request->get('created_by');
        $type = $request->get('type');
        $limit = 20;
        $page = (int) $request->get('page');
        $created_at = $request->get('created_at');

        if ($name !== null) {
            $objects->where('title', 'like', '%' . $name['searchTerm'] . '%');
        }
        if ($category_value !== null) {
            $category_ids = Category::whereIn('name', $category_value)->pluck('id')->toArray();

            $objects->whereHas('categories', function ($query) use ($category_ids, $request) {
                $query->whereIn('category_id', array_values($category_ids));
            });
        }
        $objects->offset($limit * ($page - 1))->limit($limit);
        //$test = $objects->first()->attachments;
        //foreach ($test as $item_test)
        //{
        //    echo "break";
        //}
        if ($request->isMethod('post')) {
            return response()->json([
                'posts' => $objects->get()->toArray(),
                'count' => $count,
                'categories' => $categories
            ]);
        }
    }

    public function vkSexyAll(Request $request)
    {
        $objects = Post::where('is_publish', false)->where('is_hidden', false)->orderBy('created_at', 'desc');
        $categories = Category::pluck('name')->toArray();
        $count = $objects->count();
        $sort = $request->get('sort');
        $direction = $request->get('direction');
        $name = $request->get('title');
        $category_value = ['sexy'];
        $created_by = $request->get('created_by');
        $type = $request->get('type');
        $limit = 20;
        $page = (int) $request->get('page');
        $created_at = $request->get('created_at');

        if ($name !== null) {
            $objects->where('title', 'like', '%' . $name['searchTerm'] . '%');
        }
        if ($category_value !== null) {
            $category_ids = Category::whereIn('name', $category_value)->pluck('id')->toArray();

            $objects->whereHas('categories', function ($query) use ($category_ids, $request) {
                $query->whereIn('category_id', array_values($category_ids));
            });
        }
        $objects->offset($limit * ($page - 1))->limit($limit);
        //$test = $objects->first()->attachments;
        //foreach ($test as $item_test)
        //{
        //    echo "break";
        //}
        if ($request->isMethod('post')) {
            return response()->json([
                'posts' => $objects->get()->toArray(),
                'count' => $count,
                'categories' => $categories
            ]);
        }
    }
    public function vkAnimeAll(Request $request)
    {
        $objects = Post::where('is_publish', false)->where('is_hidden', false)->orderBy('created_at', 'desc');
        $categories = Category::pluck('name')->toArray();
        $count = $objects->count();
        $sort = $request->get('sort');
        $direction = $request->get('direction');
        $name = $request->get('title');
        $category_value = ['anime'];
        $created_by = $request->get('created_by');
        $type = $request->get('type');
        $limit = 20;
        $page = (int) $request->get('page');
        $created_at = $request->get('created_at');

        if ($name !== null) {
            $objects->where('title', 'like', '%' . $name['searchTerm'] . '%');
        }
        if ($category_value !== null) {
            $category_ids = Category::whereIn('name', $category_value)->pluck('id')->toArray();

            $objects->whereHas('categories', function ($query) use ($category_ids, $request) {
                $query->whereIn('category_id', array_values($category_ids));
            });
        }
        $objects->offset($limit * ($page - 1))->limit($limit);
        //$test = $objects->first()->attachments;
        //foreach ($test as $item_test)
        //{
        //    echo "break";
        //}
        if ($request->isMethod('post')) {
            return response()->json([
                'posts' => $objects->get()->toArray(),
                'count' => $count,
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
            foreach ($categories as $item_category) {
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
