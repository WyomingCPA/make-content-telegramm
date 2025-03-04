<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


use App\Models\Category;
use App\Models\Post;
use App\Models\User;

use Tumblr\API\Client;

use TelegramBot\Api\BotApi;
use TelegramBot\Api\Types\Inline\InlineKeyboardMarkup;
use TelegramBot\Api\Types\InputMedia\InputMediaPhoto;
use TelegramBot\Api\Types\InputMedia\InputMediaVideo;
use \TelegramBot\Api\Types\InputMedia\ArrayOfInputMedia;

class TumblrController extends Controller
{
    public function publishEsteticVibes(Request $request)
    {
        $list_img = $request->get('list_img');
        $tags_array = $request->get('tags');
        $list_video =  $request->get('list_video');
        $messageText = '';

        if (!empty($tags_array)) {
            foreach ($tags_array as $tag) {
                $tagText = str_replace(' ', '_', $tag);
                $messageText .= " #$tagText";
            }
        }
        $messageText .= "\n";
        if (!empty($messageText)) {
            $chatId = '-1001597866737';
            //$chatId = '-414528593';
            $bot = new BotApi(env('TELEGRAM_TOKEN'));
            //$bot->sendMessage($chatId, $messageText, 'HTML');

            $media = new ArrayOfInputMedia();
            $messageText .= " #nature #travel \n\n\n<a href='https://t.me/estetic_vibes_tg'>Estetic Vibes</a>";
            if (!empty($list_video)) {
                foreach ($list_video as $item_video) {
                    $media->addItem(new InputMediaVideo($item_video, $messageText, 'HTML'));
                }
            } else {
                foreach ($list_img as $item_image) {
                    $media->addItem(new InputMediaPhoto($item_image, $messageText, 'HTML'));
                }
            }

            $bot->sendMediaGroup($chatId, $media);
        }
        return response()->json([
            'status' => true,
        ], 200);
    }
    public function publishAnimePost(Request $request)
    {
        $list_img = $request->get('list_img');
        $tags_array = $request->get('tags');
        $list_video =  $request->get('list_video');
        $messageText = '';
        if (!empty($tags_array)) {
            foreach ($tags_array as $tag) {
                $tagText = str_replace(' ', '_', $tag);
                $messageText .= " #$tagText";
            }
        }
        $messageText .= "\n";
        if (!empty($messageText)) {
            $chatId = '-1001771871700';
            //$chatId = '-414528593';
            $bot = new BotApi(env('TELEGRAM_TOKEN'));
            //$bot->sendMessage($chatId, $messageText, 'HTML');

            $media = new ArrayOfInputMedia();
            $messageText .= " #anime #art #tyan \n\n\n<a href='https://t.me/+ATd62K2jKB43YzIy'>Anime_Tyn_TG</a>";
            if (!empty($list_video)) {
                foreach ($list_video as $item_video) {
                    $media->addItem(new InputMediaVideo($item_video, $messageText, 'HTML'));
                }
            } else {
                foreach ($list_img as $item_image) {
                    $media->addItem(new InputMediaPhoto($item_image, $messageText, 'HTML'));
                }
            }

            $bot->sendMediaGroup($chatId, $media);
        }
        return response()->json([
            'status' => true,
        ], 200);
    }
    public function publishSexy(Request $request)
    {
        $list_img = $request->get('list_img');
        $tags_array = $request->get('tags');
        $list_video =  $request->get('list_video');
        $messageText = '';
        if (!empty($tags_array)) {
            foreach ($tags_array as $tag) {
                $tagText = str_replace(' ', '_', $tag);
                $messageText .= " #$tagText";
            }
        }
        $messageText .= "\n";
        if (!empty($messageText)) {
            $chatId = '-1001866603682';
            //$chatId = '-414528593';
            $bot = new BotApi(env('TELEGRAM_TOKEN'));
            //$bot->sendMessage($chatId, $messageText, 'HTML');

            $media = new ArrayOfInputMedia();
            $messageText .= "#girl #body #fit \n\n\n<a href='https://t.me/+HARJVgHVnPE5NTky'>World of Beauties</a>";
            if (!empty($list_video)) {
                foreach ($list_video as $item_video) {
                    $media->addItem(new InputMediaVideo($item_video, $messageText, 'HTML'));
                }
            } else {
                foreach ($list_img as $item_image) {
                    $media->addItem(new InputMediaPhoto($item_image, $messageText, 'HTML'));
                }
            }

            $bot->sendMediaGroup($chatId, $media);
        }
        return response()->json([
            'status' => true,
        ], 200);
    }
    public function publishCatsPost(Request $request)
    {
        $list_img = $request->get('list_img');
        $tags_array = $request->get('tags');
        $list_video =  $request->get('list_video');
        $messageText = '';
        if (!empty($tags_array)) {
            foreach ($tags_array as $tag) {
                $tagText = str_replace(' ', '_', $tag);
                $messageText .= " #$tagText";
            }
        }
        $messageText .= "\n";
        if (!empty($messageText)) {
            $chatId = '-1002315592624';
            //$chatId = '-414528593';
            $bot = new BotApi(env('TELEGRAM_TOKEN'));
            //$bot->sendMessage($chatId, $messageText, 'HTML');

            $media = new ArrayOfInputMedia();
            $messageText .= "#cats \n\n\n<a href='https://t.me/+7yj6MB0l529lZmRi'>Котики ≽^•⩊•^≼</a>";

            if (!empty($list_video)) {
                foreach ($list_video as $item_video) {
                    $media->addItem(new InputMediaVideo($item_video, $messageText, 'HTML'));
                }
            } else {
                foreach ($list_img as $item_image) {
                    $media->addItem(new InputMediaPhoto($item_image, $messageText, 'HTML'));
                }
            }

            $bot->sendMediaGroup($chatId, $media);
        }
        return response()->json([
            'status' => true,
        ], 200);
    }
    public function getDataPostId(Request $request)
    {
        $url = $request->get('url');
        $values = parse_url($url);
        $array =  explode("/", $values['path']);
        $nameBlog = $array[1];
        $idPost = $array[2];

        $consumer_key = env('CONSUMER_KEY');
        $consumer_secret = env('CONSUMER_SECRET');
        $token_key = env('TOKEN_KEY');
        $token_secret = env('TOKEN_SECRET');

        $client = new Client($consumer_key, $consumer_secret);
        $client->setToken($token_key, $token_secret);
        $options = [];
        $post = $client->getRequest("v2/blog/$nameBlog/posts/$idPost", $options, false);

        $tags = [];
        foreach ($post->tags as $item) {
            $tags[] = $item;
        }
        $list_img = [];
        $list_video = [];
        foreach ($post->content as $item) {
            if ($item->type === 'image') {
                $list_img[] = $item->media[0]->url;
                if (exif_imagetype($item->media[0]->url) == IMAGETYPE_GIF) {
                    $list_video[] = $item->media[0]->url;
                }
            }
            if ($item->type === 'video') {
                $list_img[] = $item->poster[0]->url;
                $list_video[] = $item->url;
            }
        }
        return response()->json([
            'status' => true,
            'list_img' => $list_img,
            'list_video' => $list_video,
            'tags' => $tags,
        ], 200);
    }

    
    public function catsVideoAll(Request $request)
    {
        $favorite_ids = Auth::user()->queuesPost->pluck('id')->toArray();
        $objects = Post::where('is_publish', false)->where('is_hidden', false)
            ->where('network', 'tumblr')
            ->where('type', 'video')
            ->where('owner_id', 113)
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
    
    public function sexyVideoAll(Request $request)
    {
        $favorite_ids = Auth::user()->queuesPost->pluck('id')->toArray();
        $objects = Post::where('is_publish', false)->where('is_hidden', false)
            ->where('network', 'tumblr')
            ->where('type', 'video')
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
    public function sexyPhotoAll(Request $request)
    {
        $favorite_ids = Auth::user()->queuesPost->pluck('id')->toArray();
        $objects = Post::where('is_publish', false)->where('is_hidden', false)
            ->where('network', 'tumblr')
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

    public function naturePhotoAll(Request $request)
    {
        $favorite_ids = Auth::user()->queuesPost->pluck('id')->toArray();
        $objects = Post::where('is_publish', false)->where('is_hidden', false)
            ->where('network', 'tumblr')
            ->where('type', 'photo')
            ->where('owner_id', 413)
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

    public function animePhotoAll(Request $request)
    {
        $favorite_ids = Auth::user()->queuesPost->pluck('id')->toArray();
        $objects = Post::where('is_publish', false)->where('is_hidden', false)
            ->where('network', 'tumblr')
            ->where('type', 'photo')
            ->where('owner_id', 313)
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
    public function catsVideoPublish(Request $request)
    {
        $rows = $request->post('selRows');
        $select = [];
        foreach ($rows as $value) {
            $messageText = '';
            //$select[] = $value['id'];
            $post = Post::findOrFail($value['id']);
            $categories = $post->categories;
            $video = $post->attachments;
            $tags = '';
            foreach ($categories as $item_category) {
                $tags .= "#" . $item_category->name . " ";
            }
            $messageText .= "\n";
            $messageText .= $value['text'];
            if (!empty($messageText)) {
                $chatId = '-1002315592624';
                //$chatId = '-414528593';
                $bot = new BotApi(env('TELEGRAM_TOKEN'));
                //$bot->sendMessage($chatId, $messageText, 'HTML');

                $media = new ArrayOfInputMedia();
                $messageText .= "#cats \n\n\n<a href='https://t.me/+7yj6MB0l529lZmRi'>Котики ≽^•⩊•^≼</a>";
    
                $media->addItem(new InputMediaVideo($video[1][0], $messageText, 'HTML'));
    
                $bot->sendMediaGroup($chatId, $media);
                $post->is_publish = true;
                $post->save();
            }
        }
        return response()->json([
            'status' => true,
        ], 200);
    }
    public function sexyVideoPublish(Request $request)
    {
        $rows = $request->post('selRows');
        $select = [];
        foreach ($rows as $value) {
            $messageText = '';
            //$select[] = $value['id'];
            $post = Post::findOrFail($value['id']);
            $categories = $post->categories;
            $video = $post->attachments;
            $tags = '';
            foreach ($categories as $item_category) {
                $tags .= "#" . $item_category->name . " ";
            }
            $messageText .= "\n";
            $messageText .= $value['text'];
            if (!empty($messageText)) {
                $chatId = '-1001866603682';
                //$chatId = '-414528593';
                $bot = new BotApi(env('TELEGRAM_TOKEN'));
                //$bot->sendMessage($chatId, $messageText, 'HTML');

                $media = new ArrayOfInputMedia();
                $messageText .= " #girl #body #fit \n\n\n<a href='https://t.me/+HARJVgHVnPE5NTky'>World of Beauties</a>";
    
                $media->addItem(new InputMediaVideo($video[1][0], $messageText, 'HTML'));
    
                $bot->sendMediaGroup($chatId, $media);
                $post->is_publish = true;
                $post->save();
            }
        }
        return response()->json([
            'status' => true,
        ], 200);
    }  
    public function catsAdvertVideoPublish(Request $request)
    {
        $rows = $request->post('selRows');
        $select = [];
        foreach ($rows as $value) {
            $messageText = '';
            //$select[] = $value['id'];
            $post = Post::findOrFail($value['id']);
            $categories = $post->categories;
            $video = $post->attachments;
            $tags = '';
            foreach ($categories as $item_category) {
                $tags .= "#" . $item_category->name . " ";
            }
            $messageText .= "\n";
            $messageText .= $value['text'];
            if (!empty($messageText)) {
                $chatId = '-1002315592624';
                //$chatId = '-414528593';
                $bot = new BotApi(env('TELEGRAM_TOKEN'));
                //$bot->sendMessage($chatId, $messageText, 'HTML');
                $keyboard = new InlineKeyboardMarkup(
                    [
                        [
                            ['text' => '🐱 Cats ≽^•⩊•^≼ 🐱', 'url' => 'https://t.me/+17PJtQS2qttmZjU6']
                        ]
                    ]
                );

                $media = new ArrayOfInputMedia();
                $messageText .= "#cats \n\n\n<a href='https://t.me/+7yj6MB0l529lZmRi'>Котики ≽^•⩊•^≼</a>";
    
                //$media->addItem(new InputMediaVideo($video[1][0], $messageText, 'HTML'));
    
                //$bot->sendMediaGroup($chatId, $media);
                $bot->sendVideo($chatId, $video[1][0], null, false, null, $keyboard);
                
                $post->is_publish = true;
                $post->save();
            }
        }
        return response()->json([
            'status' => true,
        ], 200);
    }
    
    public function animeAdvertPhotoPublish(Request $request)
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
            $messageText .= $value['text'];
            if (!empty($messageText)) {
                $chatId = '-1001771871700';
                //$chatId = '-414528593';
                $bot = new BotApi(env('TELEGRAM_TOKEN'));
                //$bot->sendMessage($chatId, $messageText, 'HTML');
                $keyboard = new InlineKeyboardMarkup(
                    [
                        [
                            ['text' => '❤ Anime View ❤', 'url' => 'https://t.me/+pgwp3k1AXf5kOThi'],
                        ]
                    ]
                );

                $media = new ArrayOfInputMedia();
                $messageText .= " #anime #art #tyan \n\n\n<a href='https://t.me/+ATd62K2jKB43YzIy'>Anime_Tyn_TG</a>";
    
                //$media->addItem(new InputMediaVideo($video[1][0], $messageText, 'HTML'));
    
                //$bot->sendMediaGroup($chatId, $media);
                $bot->sendPhoto($chatId, $list_img[1][0], null, false, $keyboard);
                
                $post->is_publish = true;
                $post->save();
            }
        }
        return response()->json([
            'status' => true,
        ], 200);
    }
    
    public function sexyAdvertPhotoPublish(Request $request)
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
            $messageText .= $value['text'];
            if (!empty($messageText)) {
                $chatId = '-1001866603682';
                //$chatId = '-414528593';
                $bot = new BotApi(env('TELEGRAM_TOKEN'));
                //$bot->sendMessage($chatId, $messageText, 'HTML');
                $keyboard = new InlineKeyboardMarkup(
                    [
                        [
                            ['text' => '❤ Sexy View ❤', 'url' => 'https://t.me/+7KljMFpo29ozNGNi'],
                        ]
                    ]
                );

                $media = new ArrayOfInputMedia();
                $messageText .= " #girl #body #fit \n\n\n<a href='https://t.me/+HARJVgHVnPE5NTky'>World of Beauties</a>";
    
                //$media->addItem(new InputMediaVideo($video[1][0], $messageText, 'HTML'));
    
                //$bot->sendMediaGroup($chatId, $media);
                $bot->sendPhoto($chatId, $list_img[1][0], null, false, $keyboard);
                
                $post->is_publish = true;
                $post->save();
            }
        }
        return response()->json([
            'status' => true,
        ], 200);
    }
    public function sexyPhotoPublish(Request $request)
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
            $messageText .= $value['text'];
            if (!empty($messageText)) {
                $chatId = '-1001866603682';
                //$chatId = '-414528593';
                $bot = new BotApi(env('TELEGRAM_TOKEN'));
                //$bot->sendMessage($chatId, $messageText, 'HTML');

                $media = new ArrayOfInputMedia();
                $messageText .= " #girl #body #fit \n\n\n<a href='https://t.me/+HARJVgHVnPE5NTky'>World of Beauties</a>";
    
                foreach ($list_img[1] as $item_image) {
                    $media->addItem(new InputMediaPhoto($item_image, $messageText, 'HTML'));
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
    public function animePhotoPublish(Request $request)
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
            $messageText .= $value['text'];
            if (!empty($messageText)) {
                $chatId = '-1001771871700';
                //$chatId = '-414528593';
                $bot = new BotApi(env('TELEGRAM_TOKEN'));
                //$bot->sendMessage($chatId, $messageText, 'HTML');

                $media = new ArrayOfInputMedia();
                $messageText .= " #anime #art #tyan \n\n\n<a href='https://t.me/+ATd62K2jKB43YzIy'>Anime_Tyn_TG</a>";
    
                foreach ($list_img[1] as $item_image) {
                    $media->addItem(new InputMediaPhoto($item_image, $messageText, 'HTML'));
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

    public function animeVideoAll(Request $request)
    {
        $favorite_ids = Auth::user()->queuesPost->pluck('id')->toArray();
        $objects = Post::where('is_publish', false)->where('is_hidden', false)
            ->where('network', 'tumblr')
            ->where('type', 'video')
            ->where('owner_id', 313)
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
    public function animeVideoPublish(Request $request)
    {
        $rows = $request->post('selRows');
        $select = [];
        foreach ($rows as $value) {
            $messageText = '';
            //$select[] = $value['id'];
            $post = Post::findOrFail($value['id']);
            $categories = $post->categories;
            $video = $post->attachments;
            $tags = '';
            foreach ($categories as $item_category) {
                $tags .= "#" . $item_category->name . " ";
            }
            $messageText .= "\n";
            $messageText .= $value['text'];
            if (!empty($messageText)) {
                $chatId = '-1001771871700';
                //$chatId = '-414528593';
                $bot = new BotApi(env('TELEGRAM_TOKEN'));
                //$bot->sendMessage($chatId, $messageText, 'HTML');

                $media = new ArrayOfInputMedia();
                $messageText .= "#anime #art #tyan \n\n\n<a href='https://t.me/+ATd62K2jKB43YzIy'>Anime_Tyn_TG</a>";
    
                $media->addItem(new InputMediaVideo($video[1][0], $messageText, 'HTML'));
    
                $bot->sendMediaGroup($chatId, $media);
                $post->is_publish = true;
                $post->save();
            }
        }
        return response()->json([
            'status' => true,
        ], 200);
    }
}
