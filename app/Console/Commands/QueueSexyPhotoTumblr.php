<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Category;
use App\Models\Post;
use App\Models\User;
use App\Models\Group;

use TelegramBot\Api\BotApi;
use TelegramBot\Api\Types\InputMedia\InputMediaPhoto;
use \TelegramBot\Api\Types\InputMedia\ArrayOfInputMedia;
use TelegramBot\Api\Types\InputMedia\InputMediaVideo;


class QueueSexyPhotoTumblr extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:publish-sexy-photo-tumblr-queue';

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
                $objects = Post::where('is_publish', false)
                    ->where('owner_id', 213)
                    ->where('type', 'photo')
                    ->where('network', 'tumblr')
                    ->where('is_hidden', false)
                    ->whereIn('id', $favorite_ids)
                    ->orderBy('created_at', 'desc');
        
                echo $objects->count();
                $post = $objects->inRandomOrder()->first();
                echo $post->id;
                $post->touch();
        
                try {
                    $messageText = '';
                    //$select[] = $value['id'];
                    $categories = $post->categories;
                    $list_img = $post->attachments;
                    $tags = '';
                    foreach ($categories as $item_category) {
                        $tags .= "#" . $item_category->name . " ";
                    }
                    $messageText .= "\n";
                    $messageText .= $post->text;
        
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
                } catch (\Error $e) {
                    $user->queuesPost()->detach(array_values([$post->id]));
                    $post->is_hidden = true;
                    $post->save();
                    echo $e->getMessage();
                }
        
                return Command::SUCCESS;
    }
}
