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
        $messageText = "<b>Последнее</b>\n\n";
        $links = array();
        $raw_links = array();
        $item_count = 1;
        //Тут получаем image header
        foreach ($models->take(5)->get() as $item_img) {
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
            $client = new Client($options);
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
            return Command::SUCCESS;
        }
        $first_link = array_shift($list_img);
        //Тут формируем пост 
        foreach ($models->take(10)->get() as $post) {
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

        return Command::SUCCESS;
    }
}
