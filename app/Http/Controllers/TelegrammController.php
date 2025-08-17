<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;
use GuzzleHttp\Client;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Category;
use App\Models\Post;

use TelegramBot\Api\BotApi;
use TelegramBot\Api\Types\InputMedia\InputMediaPhoto;
use TelegramBot\Api\Types\InputMedia\ArrayOfInputMedia;
use TelegramBot\Api\Types\InputMedia\InputMediaVideo;

use App\Helpers\TelegramHelper;



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
    public function catsPhotoAll(Request $request)
    {
        $favorite_ids = Auth::user()->queuesPost->pluck('id')->toArray();
        $objects = Post::where('is_publish', false)->where('is_hidden', false)
            ->where('network', 'telegramm')
            ->where('type', 'photo')
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

    public function animePhotoAll(Request $request)
    {
        $favorite_ids = Auth::user()->queuesPost->pluck('id')->toArray();
        $objects = Post::where('is_publish', false)->where('is_hidden', false)
            ->where('network', 'telegramm')
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

    public function catsVideoAll(Request $request)
    {
        $favorite_ids = Auth::user()->queuesPost->pluck('id')->toArray();
        $objects = Post::where('is_publish', false)->where('is_hidden', false)
            ->where('network', 'telegramm')
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
            ]);
        }
    }
    public function sexyVideoAll(Request $request)
    {
        $favorite_ids = Auth::user()->queuesPost->pluck('id')->toArray();
        $objects = Post::where('is_publish', false)->where('is_hidden', false)
            ->where('network', 'telegramm')
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
            ]);
        }
    }
    public function sexyPhotoPublish(Request $request)
    {
        $telegram = new TelegramHelper();

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
                $chatId = '-1002366645779';
                //$chatId = '-414528593';
                $bot = new BotApi(env('TELEGRAM_TOKEN'));
                //$bot->sendMessage($chatId, $messageText, 'HTML');

                $media = new ArrayOfInputMedia();
                $messageText .= " #girl #body #fit \n\n\n<a href='https://t.me/+U0H_PQ6A29g0ZmVi'>Bikini Paradise</a>";

                if (is_array($list_img[1])) {
                    $imgUrls = [];
                    foreach ($list_img[1] as $item_image) {
                        $imgUrls[] = $item_image;
                    }
                    // Отправка нескольких картинок
                    $telegram->sendPhotos($chatId, $imgUrls, $messageText, 'HTML');
                    $post->is_publish = true;
                    $post->save();
                    
                } else {

                    $telegram = new TelegramHelper();
                    $telegram->sendPhotos($chatId, $list_img[1], $messageText, 'HTML');
                    $post->is_publish = true;
                    $post->save();
                }
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
                $chatId = '-1002366645779';
                //$chatId = '-414528593';
                $bot = new BotApi(env('TELEGRAM_TOKEN'));
                //$bot->sendMessage($chatId, $messageText, 'HTML');

                $media = new ArrayOfInputMedia();
                $messageText .= " #girl #body #fit \n\n\n<a href='https://t.me/+U0H_PQ6A29g0ZmVi'>Bikini Paradise</a>";

                $media->addItem(new InputMediaVideo($video[1], $messageText, 'HTML'));

                $bot->sendMediaGroup($chatId, $media);

                $post->is_publish = true;
                $post->save();
            }
        }

        return response()->json([
            'status' => true,
        ], 200);
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
                $messageText .= "🐾 #cats \n\n\n<a href='https://t.me/+7yj6MB0l529lZmRi'>Cats ≽^•⩊•^≼</a>";

                $media->addItem(new InputMediaVideo($video[1], $messageText, 'HTML'));

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
        $telegram = new TelegramHelper();

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
                $messageText = " #anime #art #tyan \n\n\n<a href='https://t.me/+ATd62K2jKB43YzIy'>Anime_Tyn_TG</a>";

                if (is_array($list_img[1])) {
                    $imgUrls = [];
                    foreach ($list_img[1] as $item_image) {
                        //$media->addItem(new InputMediaPhoto($item_image, $messageText, 'HTML'));
                        $imgUrls[] = $item_image;
                    }
                    // Отправка нескольких картинок
                    $telegram->sendPhotos($chatId, $imgUrls, $messageText, 'HTML');
                    $post->is_publish = true;
                    $post->save();
                } else {
                    //Скачиваем картинку                  
                    //$media->addItem(new InputMediaPhoto($list_img[1], $messageText, 'HTML'));
                    $telegram = new TelegramHelper();
                    $telegram->sendPhotos($chatId, $list_img[1], $messageText, 'HTML');
                    $post->is_publish = true;
                    $post->save();
                }

                //$bot->sendMediaGroup($chatId, $media);

            }
        }
        return response()->json([
            'status' => true,
        ], 200);
    }
    private function downloadImageToLocal($url)
    {
        // 1. Качаем файл
        $response = Http::timeout(15)->get($url);

        if (!$response->successful()) {
            throw new \Exception("Не удалось скачать: $url");
        }

        // 2. Определяем имя файла из URL
        $pathFromUrl = parse_url($url, PHP_URL_PATH);
        $fileName = basename($pathFromUrl);

        // 3. Если в URL нет имени — генерируем
        if (empty($fileName) || $fileName === '/' || !str_contains($fileName, '.')) {
            // Определяем расширение из Content-Type
            $ext = '';
            $contentType = $response->header('Content-Type');
            if (str_starts_with($contentType, 'image/')) {
                $ext = '.' . explode('/', $contentType)[1];
            }
            $fileName = uniqid('img_') . $ext;
        }

        // 4. Путь в локальном хранилище
        $localPath = "parsed/" . $fileName;

        // 5. Сохраняем
        Storage::disk('local')->put($localPath, $response->body());

        // 6. Возвращаем полный путь к файлу
        return storage_path('app/' . $localPath);
    }
    function downloadImageDebug($url)
    {
        // 1. Качаем файл
        $response = Http::timeout(30)
            ->withHeaders(['User-Agent' => 'Mozilla/5.0'])
            ->get($url);

        if (!$response->successful()) {
            throw new \Exception("Не удалось скачать: $url");
        }
        $body = $response->body();
        if (empty($body)) {
            throw new \Exception("Ответ пустой — возможно, сайт блокирует запрос");
        }

        // 2. Определяем имя файла
        $pathFromUrl = parse_url($url, PHP_URL_PATH) ?: '';
        $fileName = basename($pathFromUrl);

        // Если имя пустое или без расширения — генерируем
        if (empty($fileName) || $fileName === '/' || !str_contains($fileName, '.')) {
            $ext = 'jpg';
            $contentType = $response->header('Content-Type', '');
            if (str_starts_with($contentType, 'image/')) {
                $ext = explode('/', $contentType)[1] ?? 'jpg';
                $ext = explode(';', $ext)[0]; // убрать charset
                if ($ext === 'jpeg') $ext = 'jpg';
            }
            $fileName = uniqid('img_') . '.' . $ext;
        }
        //Обрезаем имя
        $maxLength = 100;
        if (strlen($fileName) > $maxLength) {
            $ext = pathinfo($fileName, PATHINFO_EXTENSION);
            $base = pathinfo($fileName, PATHINFO_FILENAME);
            $base = substr($base, 0, $maxLength - strlen($ext) - 1);
            $fileName = $base . '.' . $ext;
        }
        // 3. Путь внутри диска
        $localPath = 'parsed/' . $fileName;

        // 4. Создаём директорию, если нет
        Storage::disk('local')->makeDirectory('parsed');

        // 5. Сохраняем
        $saved = Storage::disk('local')->put($localPath, $response->body());

        if (!$saved) {
            $test = storage_path('app/' . $localPath);
            throw new \Exception("Не удалось сохранить файл: $localPath");
        }

        // 6. Возвращаем полный путь
        return storage_path('app/' . $localPath);
    }
}
