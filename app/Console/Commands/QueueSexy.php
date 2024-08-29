<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use Illuminate\Support\Facades\Auth;
use App\Models\Category;
use App\Models\Post;
use App\Models\User;
use App\Models\Group;

use TelegramBot\Api\BotApi;
use TelegramBot\Api\Types\InputMedia\InputMediaPhoto;
use \TelegramBot\Api\Types\InputMedia\ArrayOfInputMedia;

use Tumblr\API\Client;

class QueueSexy extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:publish-sexy-queue';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {

        //Сделать проверку запуска публикаций для телеграмм
        $isStart = Group::where('slug', '=', 'sexy')->first();
        if (!$isStart->is_start) {
            echo "Не публикуем";
            return Command::SUCCESS;
        }
        $user = User::select('id')->where('email', 'WyomingCPA@yandex.ru')->first();
        $favorite_ids = $user->queuesPost->pluck('id')->toArray();
        $objects = Post::where('is_publish', false)->where('is_hidden', false)->whereIn('id', $favorite_ids)->orderBy('created_at', 'desc');

        $category_value = ['sexy'];
        $category_ids = Category::whereIn('name', $category_value)->pluck('id')->toArray();
        $objects->whereHas('categories', function ($query) use ($category_ids) {
            $query->whereIn('category_id', array_values($category_ids));
        });

        if ($objects->count() == 0) {
            $objects =  Post::where('is_publish', true)->where('is_hidden', false)->orderBy('updated_at', 'asc');
            $category_value = ['sexy'];
            $category_ids = Category::whereIn('name', $category_value)->pluck('id')->toArray();
            $objects->whereHas('categories', function ($query) use ($category_ids) {
                $query->whereIn('category_id', array_values($category_ids));
            });
            //echo $objects->count();
        }
        $post = $objects->inRandomOrder()->first();
        $post->touch();
        try {
            //Telegramm
            $messageText = '';
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
                        $messageText = "#girl #body #fit \n\n\n<a href='https://t.me/worldofbeautiestg'>World of Beauties</a>";
                        $media->addItem(new InputMediaPhoto($item_image, $messageText, 'HTML'));
                    }
                }
                $bot->sendMediaGroup($chatId, $media);
                $post->is_publish = true;
                $post->save();
            }

            //publish Tumblr
            $consumer_key = env('CONSUMER_KEY'); //  your consumer key
            $consumer_secret = env('CONSUMER_SECRET'); // your consumer secret
            $token_key = env('TOKEN_KEY'); // your token
            $token_secret = env('TOKEN_SECRET'); // your token secret


            $blogName = 'bouncymeatballs';

            $client = new Client($consumer_key, $consumer_secret);
            $client->setToken($token_key, $token_secret);
            $count_post = 0;

            $messageText = '';

            $categories = $post->categories;
            $list_img = $post->attachments;
            $list_img_tumblr = [];
            foreach ($list_img as $img) {
                foreach ($img as $item_image) {
                    $list_img_tumblr[] = $item_image;
                }
            }
            $caption = '';
            if ($count_post == 3) {
                $caption = '<a href="https://t.me/worldofbeautiestg">Link Source</a>';
            }
            $postData = array(
                'caption' => $caption,
                'tags' => 'sexy, girl, body, fit, beautiful photos',
                'type' => 'photo',
                'data' => $list_img_tumblr
            );
            $client->createPost($blogName, $postData);
            echo 'Публикация выполена успешно';
        } catch (\Error $e) {
            $user->queuesPost()->detach(array_values([$post->id]));
            $post->is_hidden = true;
            $post->save();
            echo $e->getMessage();
        }

        return Command::SUCCESS;
    }
}
