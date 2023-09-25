<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Carbon\Carbon;

use App\Models\RssItem;
use App\Models\Category;

use TelegramBot\Api\BotApi;

class SendNewPostToday extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:send-new-post';

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
        $models = RssItem::where('is_publish', null)
            ->where('created_at', '>=', Carbon::now()->subDays(2)->startOfDay())
            ->orderBy('created_at', 'desc');

        $category_value = ['python', 'javascript', 'php', 'C#', 'laravel'];    
        $category_ids = Category::whereIn('name', $category_value)->pluck('id')->toArray();
        $models->whereHas('categories', function ($query) use ($category_ids) {
                $query->whereIn('category_id', array_values($category_ids));
        });
        foreach ($models->get() as $post)
        {
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
        echo $models->count();
        
        return Command::SUCCESS;
    }
}