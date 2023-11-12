<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\RssItem;
use App\Models\Category;

use GuzzleHttp\Client;
use Symfony\Component\DomCrawler\Crawler;



class GetRssHabr extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:get-rss-habr';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command get habr feed rss';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $options = [
            'headers' => [
                'User-Agent' => 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.101 Safari/537.36'
            ],
            'curl' => [CURLOPT_SSL_VERIFYPEER => false],
        ];

        $client = new Client($options);
        $response = $client->request('GET', 'https://habr.com/ru/rss/articles/')->getBody()->getContents();

        $crawler = new Crawler($response);
        $items = $crawler->filterXPath('//channel/item');
        foreach ($items as $item) {
            $domElement = new Crawler($item);
            $title = $domElement->filter('title')->text();
            $description = $domElement->filter('description')->text();
            $guid = $domElement->filter('guid')->text();
            $categorysNode = $domElement->filterXPath('//category');
            $list_category = [];
            foreach ($categorysNode as $categoryItem) {
                $domCategory = new Crawler($categoryItem);
                $titleCategory = $domCategory->filter('category')->text();
                $list_category[] = $titleCategory;
            }
            try {
                $pubDate = $domElement->filter('pubDate')->text();
                echo 'break';
            } catch (\Exception $e) {
            }
            $list_id_category = [];
            foreach ($list_category as $item_category)
            {
                $model = Category::firstOrCreate(['name' => $item_category,],);
                $list_id_category [] = $model->id;
            }

            $model = RssItem::firstOrCreate(
                ['link' => $guid,],
                [
                    'title' => $title,
                    'link' => $guid,
                    'body' => $description,
                    'pubDate' => '2023-04-03 20:43:42',
                ]
            );
            if($model->wasRecentlyCreated){
                $model->categories()->attach($list_id_category);
                $model->save();
            }

            echo $title . "\n";
        }

        return Command::SUCCESS;
    }
}