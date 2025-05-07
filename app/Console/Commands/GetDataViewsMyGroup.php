<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use GuzzleHttp\Client;
use Symfony\Component\DomCrawler\Crawler;

use App\Models\Group;
use App\Models\Views;

class GetDataViewsMyGroup extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:get-views-my-groups';

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
        $options = [
            'headers' => [
                'User-Agent' => 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/41.0.2272.101 Safari/537.36',
            ],
            'curl' => [CURLOPT_SSL_VERIFYPEER => false],
        ];
        $array_groups = Group::where('is_start', true)->orderBy('updated_at', 'asc')->get()->toArray();
        foreach ($array_groups as $item_group) {
            $url = $item_group['url_group'];
            $client = new Client($options);
            $response = $client->request('GET', $url)->getBody()->getContents();
            $crawler = new Crawler($response);
            $post_list = $crawler->filterXPath("//*[@class='tgme_widget_message_wrap js-widget_message_wrap']");
            $count_view_last_post = $post_list->last()->filterXPath("//*[@class='tgme_widget_message_views']")->text();
            echo "$count_view_last_post\n";
            
            $model = Views::create(
                [
                    'groups_id' => $item_group['id'],
                    'last_post_view' => $count_view_last_post,
                    'summ_post_view' => 0,
                ]
            );
        }

        return Command::SUCCESS;
    }
}
