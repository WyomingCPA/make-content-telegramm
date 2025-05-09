<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use App\Models\Category;
use App\Models\Post;
use App\Models\Source;
use App\Models\Group;

use GuzzleHttp\Client;
use Symfony\Component\DomCrawler\Crawler;

class GetPostFromTelegrammSexy extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:get-telegramm-post-sexy';

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
        $list_blog_name = [
            'https://t.me/s/Tenderness_my',
        ];

        $options = [
            'headers' => [
                'User-Agent' => 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.101 Safari/537.36',
            ],
            'curl' => [CURLOPT_SSL_VERIFYPEER => false],
        ];
        shuffle($list_blog_name);


        foreach ($list_blog_name as $item_blog) {
            $client = new Client($options);
            $response = $client->request('GET', $item_blog)->getBody()->getContents();
            $crawler = new Crawler($response);

            //$list_img = [];
            $post_list = $crawler->filterXPath("//*[@class='tgme_widget_message_wrap js-widget_message_wrap']");
            
            foreach ($post_list as $item_post) {
                $outerHTML = $item_post->ownerDocument->saveHTML($item_post);
                $crawler_block = new Crawler($outerHTML);
                try {
                    $raw_string =  $crawler_block->filterXPath("//*[@class='media_supported_cont']/a")->attr('style');
                    $regex = "/.*\(([^)]*)\)/";
                    preg_match($regex, $raw_string, $matches);
                    $list_img = trim($matches[1], "'");
                    $link = $crawler_block->filterXPath("//*[@class='media_supported_cont']/a")->attr('href');

                    $is_publish = false;
                    $is_hidden = false;
                    $attachments = [];
                    $attachments = [$list_img, $list_img];
                    echo $list_img . "\n";
                    $model = Post::firstOrCreate(
                        ['link' => $link,],
                        [
                            'post_id' => 0,
                            'owner_id' => 213,
                            'text' => "",
                            'attachments' => $attachments,
                            'is_publish' => false,
                            'is_hidden' => false,
                            'network' => 'telegramm',
                            'type' => 'photo'
                        ]
                    );
                } catch (\Exception $e) {
                    echo $e->getMessage() . "\n";
                    continue;
                }
                echo "break";
            }
         
        }

        return Command::SUCCESS;
    }
}
