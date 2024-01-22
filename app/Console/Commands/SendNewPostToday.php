<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Carbon\Carbon;

use App\Models\RssItem;
use App\Models\Category;

use TelegramBot\Api\BotApi;
use TelegramBot\Api\Types\InputMedia\InputMediaPhoto;
use \TelegramBot\Api\Types\InputMedia\ArrayOfInputMedia;

use GuzzleHttp\Client;
use Symfony\Component\DomCrawler\Crawler;

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
        $messageText = "<b>Последние статьи</b>\n\n";
        $links = array();
        $item_count = 1;
        foreach ($models->take(5)->get() as $post) {
            $categories = $post->categories;
            $tags = '';
            foreach ($categories as $item_category) {
                if (strlen($item_category->name) <= 15)
                {
                    $tags .= "#" . str_replace('-', '_', $item_category->name) . " ";
                }
                
            }
            $messageText .= "$item_count) <a href='$post->link'>$post->title</a>\n";
            $messageText .= $tags . "\n \n";
            $links [] = $post->link;
            $post->is_publish = true;
            $post->save();
            
            $item_count++;
        }
        $first_link = array_shift($links);
        $options = [
            'headers' => [
                'User-Agent' => 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.101 Safari/537.36'
            ],
            'curl' => [CURLOPT_SSL_VERIFYPEER => false],
        ];
        if (count($links) === 0) {
            echo "No Data";
            return Command::SUCCESS;
       }

        $client = new Client($options);
        $response = $client->request('GET', $first_link)->getBody()->getContents();
        
        $crawler = new Crawler($response);
        $image = $crawler->filterXPath('//*[@id="post-content-body"]//img')->eq(0)->attr('src');
        $list_img = array($image);
        $chatId = '-1001723315292';
        //$chatId = '-414528593';
        $bot = new BotApi(env('TELEGRAM_TOKEN'));
        $media = new ArrayOfInputMedia();
        foreach ($list_img as $img) {
            $media->addItem(new InputMediaPhoto($img, $messageText, 'HTML'));
        }

        $bot->sendMediaGroup($chatId, $media);



        return Command::SUCCESS;
    }
}
