<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use VK\OAuth\VKOAuth;
use VK\Client\VKApiClient;

use App\Models\Category;
use App\Models\Post;

class GetAnimePostFromVk extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:get-vk-anime';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command get vk anime post';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $access_token = env('VK_ACCESS_TOKEN');
        $vk = new VKApiClient();
        
        //photo-40850509_457409730
        //171488847
        $owner_id = -115419027;
        $response = $vk->wall()->get($access_token, [
            'owner_id'  => $owner_id,
            'count'    => 50,
        ]);
        $posts_image = [];
        foreach ($response['items'] as $item) {
            $img_src = [];
            foreach ($item['attachments'] as $image) {
                if ($image['type'] == 'photo') {
                    $posts_image = $image['photo']['sizes'];
                    $numbers = array_column($posts_image, "width");
                    $max_value = max($numbers);
                    $filteredMaxSize = array_filter($posts_image, fn ($image) => $image["width"] == $max_value);
                    $img_src[] = array_column($filteredMaxSize, "url");
                }
            }

            $id_post = $item["id"];
            $text_post = $item["text"];

            $list_id_category = [];
            $list_category = ["anime"];
            foreach ($list_category as $item_category) {
                $model = Category::firstOrCreate(['name' => $item_category,],);
                $list_id_category[] = $model->id;
            }

            $list_id_category = [];
            foreach ($list_category as $item_category)
            {
                $model = Category::firstOrCreate(['name' => $item_category,],);
                $list_id_category [] = $model->id;
            }

            $link = "photo" . str($owner_id) . "_" . str($id_post);
            $model = Post::firstOrCreate(
                ['link' => $link,],
                [
                    'post_id' => $id_post,
                    'owner_id' => $owner_id,
                    'text' => $text_post,
                    'attachments' => $img_src,
                    'is_publish' => false,
                    'is_hidden' => false,
                ]
            );
            $model->save();
            $model->categories()->attach($list_id_category);

            echo 'break';
        }
        return Command::SUCCESS;
    }
}
