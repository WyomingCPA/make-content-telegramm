<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use TelegramBot\Api\BotApi;
use TelegramBot\Api\Types\InputMedia\InputMediaPhoto;
use \TelegramBot\Api\Types\InputMedia\ArrayOfInputMedia;

use Tumblr\API\Client;

use App\Models\RssItem;
use App\Models\Post;
use App\Models\Category;


use Symfony\Component\DomCrawler\Crawler;

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

        //$categories = Category::pluck('name')->toArray();
        $categories = ['laravel', 'php', 'typescript', 'javascript', 'vue', 'unix',
        'программирование', 'python', 'разработка', 'github'];
        
        $sort = $request->get('sort');
        $direction = $request->get('direction');
        $name = $request->get('title');
        $category_value = $request->get('category_value');
        $created_by = $request->get('created_by');
        $type = $request->get('type');
        $limit = 50;
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
        $count = $objects->count();
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
            $tags = '#girl #body #fit';
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
                        $media->addItem(new InputMediaPhoto($item_image, '#sexy #girl #body #fit'));
                    }
                }
                $bot->sendMediaGroup($chatId, $media);
                $post->is_publish = true;
                $post->save();
            }
        }
        //publish Tumblr
        $consumer_key = env('CONSUMER_KEY'); //  your consumer key
        $consumer_secret = env('CONSUMER_SECRET'); // your consumer secret
        $token_key = env('TOKEN_KEY'); // your token
        $token_secret = env('TOKEN_SECRET'); // your token secret

        
        $blogName = 'bouncymeatballs';
        
        $client = new Client($consumer_key, $consumer_secret);
        $client->setToken($token_key, $token_secret);
        $count_post=0;
        foreach ($rows as $value) {
            $messageText = '';
            //$select[] = $value['id'];
            $post = Post::findOrFail($value['id']);
            $categories = $post->categories;
            $list_img = $post->attachments;
            $list_img_tumblr = [];
            foreach ($list_img as $img) {
                foreach ($img as $item_image) {
                    $list_img_tumblr[] = $item_image;
                }
            }
            $caption = '';
            if ($count_post == 3)
            {
                $caption = '<a href="https://t.me/worldofbeautiestg">Link Source</a>';
            }
            $postData = array(
                'caption' => $caption,
                'tags' => 'sexy, girl, body, fit, beautiful photos',
                'type' => 'photo', 'data' => $list_img_tumblr
            );
            $client->createPost($blogName, $postData);
            $count_post++;
        }
        return response()->json([
            'status' => true,
        ], 200);
    }
    public function vkSexyRelease(Request $request)
    {
        $objects = Post::where('is_publish', true)->where('is_hidden', false)->orderBy('updated_at', 'desc');
        $categories = Category::pluck('name')->toArray();
        $count = $objects->count();
        $sort = $request->get('sort');
        $direction = $request->get('direction');
        $name = $request->get('title');
        $category_value = ['sexy'];
        $created_by = $request->get('created_by');
        $type = $request->get('type');
        $limit = 50;
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

    public function vkEsteticVibesRelease(Request $request)
    {
        $objects = Post::where('is_publish', true)->where('is_hidden', false)->orderBy('updated_at', 'desc');
        $categories = Category::pluck('name')->toArray();
        $count = $objects->count();
        $sort = $request->get('sort');
        $direction = $request->get('direction');
        $name = $request->get('title');
        $category_value = ['estetic_vibes'];
        $created_by = $request->get('created_by');
        $type = $request->get('type');
        $limit = 50;
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
    public function vkAnimeSetQueue(Request $request)
    {
        $rows = $request->post('selRows');
        $select = [];
        foreach ($rows as $value) {
            $select[] = $value['id'];
        }

        Auth::user()->queuesPost()->attach(array_values($select));

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
            $tags = '#art #tyan ';
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
                        $media->addItem(new InputMediaPhoto($item_image, '#anime #art #tyan'));
                    }
                }
                $bot->sendMediaGroup($chatId, $media);
                $post->is_publish = true;
                $post->save();
            }
        }
        //publish Tumblr
        $consumer_key = env('CONSUMER_KEY'); //  your consumer key
        $consumer_secret = env('CONSUMER_SECRET'); // your consumer secret
        $token_key = env('TOKEN_KEY'); // your token
        $token_secret = env('TOKEN_SECRET'); // your token secret

        $list_name = ['anime-feeder', 'animegirlpin'];
        $blogName = $list_name[array_rand($list_name, 1)];
        
        $client = new Client($consumer_key, $consumer_secret);
        $client->setToken($token_key, $token_secret);
        $count_post=0;
        foreach ($rows as $value) {
            $messageText = '';
            //$select[] = $value['id'];
            $post = Post::findOrFail($value['id']);
            $categories = $post->categories;
            $list_img = $post->attachments;
            $list_img_tumblr = [];
            foreach ($list_img as $img) {
                foreach ($img as $item_image) {
                    $list_img_tumblr[] = $item_image;
                }
            }
            $caption = '';
            if ($count_post == 3)
            {
                $caption = '<a href="https://t.me/anime_tynka">Link Source</a>';
            }
            $postData = array(
                'caption' => $caption,
                'tags' => 'anime, art, tyan',
                'type' => 'photo', 'data' => $list_img_tumblr
            );
            $client->createPost($blogName, $postData);
            $count_post++;
        }

        return response()->json([
            'status' => true,
        ], 200);
    }

    public function vkEsteticVibesPublish(Request $request)
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
                $chatId = '-1001597866737';
                //$chatId = '-414528593';
                $bot = new BotApi(env('TELEGRAM_TOKEN'));
                //$bot->sendMessage($chatId, $messageText, 'HTML');

                $media = new ArrayOfInputMedia();
                foreach ($list_img as $img) {
                    foreach ($img as $item_image) {
                        $media->addItem(new InputMediaPhoto($item_image, '#nature #travel'));
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
        $objects = Post::where('is_publish', true)->where('is_hidden', false)->orderBy('updated_at', 'desc');
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
        $favorite_ids = Auth::user()->queuesPost->pluck('id')->toArray();
        $objects = Post::where('is_publish', false)->where('is_hidden', false)->whereNotIn('id', $favorite_ids)->orderBy('created_at', 'desc');
        $categories = Category::pluck('name')->toArray();
        $count = $objects->count();
        $sort = $request->get('sort');
        $direction = $request->get('direction');
        $name = $request->get('title');
        $category_value = ['sexy'];
        $created_by = $request->get('created_by');
        $type = $request->get('type');
        $limit = 50;
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
        $favorite_ids = Auth::user()->queuesPost->pluck('id')->toArray();
        $objects = Post::where('is_publish', false)->where('is_hidden', false)->whereNotIn('id', $favorite_ids)->orderBy('created_at', 'desc');
        $categories = Category::pluck('name')->toArray();
        $count = $objects->count();
        $sort = $request->get('sort');
        $direction = $request->get('direction');
        $name = $request->get('title');
        $category_value = ['anime'];
        $created_by = $request->get('created_by');
        $type = $request->get('type');
        $limit = 50;
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

    public function vkMirTlenMaiAll(Request $request)
    {
        $favorite_ids = Auth::user()->queuesPost->pluck('id')->toArray();
        $objects = Post::where('is_publish', false)->where('is_hidden', false)->whereNotIn('id', $favorite_ids)->orderBy('created_at', 'desc');
        $categories = Category::pluck('name')->toArray();
        $count = $objects->count();
        $sort = $request->get('sort');
        $direction = $request->get('direction');
        $name = $request->get('title');
        $category_value = ['mir_tlen_mai'];
        $created_by = $request->get('created_by');
        $type = $request->get('type');
        $limit = 50;
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
    public function vkEsteticVibesAll(Request $request)
    {
        $favorite_ids = Auth::user()->queuesPost->pluck('id')->toArray();
        $objects = Post::where('is_publish', false)->where('is_hidden', false)->whereNotIn('id', $favorite_ids)->orderBy('created_at', 'desc');
        $categories = Category::pluck('name')->toArray();
        $count = $objects->count();
        $sort = $request->get('sort');
        $direction = $request->get('direction');
        $name = $request->get('title');
        $category_value = ['estetic_vibes'];
        $created_by = $request->get('created_by');
        $type = $request->get('type');
        $limit = 50;
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
        foreach ($rows as $item)
        {
            $select [] = $item['id'];
        }
        $objects = RssItem::whereIn('id', $select)->orderBy('created_at', 'desc');
        $messageText = "<b>Подборка</b>\n\n";
        $links = array();
        $raw_links = array();
        $item_count = 1;
        //Тут получаем image header
        foreach ($objects->get() as $item_img) {
            $raw_links[] = $item_img->link;
        }
        $options = [
            'headers' => [
                'User-Agent' => 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.101 Safari/537.36'
            ],
            'curl' => [CURLOPT_SSL_VERIFYPEER => false],
        ];
        $list_img = array();
        foreach ($raw_links as $item_link)
        {
            $client = new \GuzzleHttp\Client($options);
            $response = $client->request('GET', $item_link)->getBody()->getContents();
    
            $crawler = new Crawler($response);
            $image = '';
            try {
                $image = $crawler->filterXPath('//*[@id="post-content-body"]//img')->eq(0)->attr('src');
                if (!empty($image)) {
                    echo "$image\n";
                    $list_img = array($image);
                    break;
                }
            }
            catch (\Exception $e)
            {
                echo 'Error';
            }
        }

        if (count($list_img) === 0) {
            echo "No Data";
            return response()->json([
                'status' => true,
            ], 200);
        }
        $first_link = array_shift($list_img);
        //Тут формируем пост 
        foreach ($objects->get() as $post) {
            $categories = $post->categories;
            $tags = '';
            foreach ($categories as $item_category) {
                if (strlen($item_category->name) <= 15) {
                    if ($item_category->name === "anime")
                    {
                        continue;
                    }
                    $tags .= "#" . str_replace('-', '_', $item_category->name) . " ";
                }
            }
            $messageText .= "$item_count) <a href='$post->link'>$post->title</a>\n";
            $messageText .= $tags . "\n \n";

            $post->is_publish = true;
            $post->save();

            $item_count++;
        }

        $chatId = '-1001723315292';
        //$chatId = '-414528593';
        $bot = new BotApi(env('TELEGRAM_TOKEN'));
        $media = new ArrayOfInputMedia();
        $media->addItem(new InputMediaPhoto($first_link, $messageText, 'HTML'));
        $bot->sendMediaGroup($chatId, $media);

        return response()->json([
            'status' => true,
        ], 200);
    }
    public function vkMirTlenMaiPublish(Request $request)
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
                $chatId = '-1002082778220';
                //$chatId = '-414528593';
                $bot = new BotApi(env('TELEGRAM_TOKEN'));
                //$bot->sendMessage($chatId, $messageText, 'HTML');

                $media = new ArrayOfInputMedia();
                foreach ($list_img as $img) {
                    foreach ($img as $item_image) {
                        $media->addItem(new InputMediaPhoto($item_image, $post->text));
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
}
