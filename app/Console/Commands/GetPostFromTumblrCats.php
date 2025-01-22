<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use App\Models\Category;
use App\Models\Post;
use App\Models\Source;
use App\Models\Group;

use Tumblr\API\Client;

class GetPostFromTumblrCats extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:get-tumblr-post-cats';

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
        $consumer_key = env('CONSUMER_KEY'); //  your consumer key
        $consumer_secret = env('CONSUMER_SECRET'); // your consumer secret
        $token_key = env('TOKEN_KEY'); // your token
        $token_secret = env('TOKEN_SECRET'); // your token secret
        $client = new Client($consumer_key, $consumer_secret);
        $client->setToken($token_key, $token_secret);

        $list_blog_name = [
            'everythingfox',
            'caats',
            'cute-catts',
            'superkursunaskr',
            'catbot2',
            'catasters',
            'cuteness--overload'
        ];
        $options = [];
        foreach ($list_blog_name as $item_blog) {
            $post_list = $client->getRequest("v2/blog/$item_blog/posts", $options, false);
            foreach ($post_list->posts as $value)
            {
                $post = $client->getRequest("v2/blog/$item_blog/posts/$value->id", $options, false);
        
                $tags = [];
                foreach ($post->tags as $item) {
                    $tags[] = $item;
                }
                $messageText = '';
                if (!empty($tags)) {
                    foreach ($tags as $tag) {
                        $tagText = str_replace(' ', '_', $tag);
                        $messageText .= " #$tagText";
                    }
                }
                $list_img = [];
                $list_video = [];
                $type_post = '';
                foreach ($post->content as $item) {
                    if ($item->type === 'image') {
                        
                        try {
                            $list_img[] = $item->media[0]->url;
                            echo "$value->post_url\n";
                        } catch (\Exception $e) {
                            echo 'error';
                            continue;
                        }
                        
                        
                        if (exif_imagetype($item->media[0]->url) == IMAGETYPE_GIF) {
                            $list_video[] = $item->media[0]->url;
                            $type_post = 'video';
                        }
                    }
                    if ($item->type === 'video') {
                        $list_img[] = $item->poster[0]->url;
                        $list_video[] = $item->url;
                        $type_post = 'video';
                    }
                }
        
                if ($type_post ==='video')
                {
                    $link = $value->post_url;
                    $post_id = $value->id_string;
                    $text = $messageText;
                    $type_post = 'video';
                    $network_post = 'tumblr';
                    $attachments = [$list_img[0], $list_video];
                    $is_publish = false;
                    $is_hidden = false;

                    $model = Post::firstOrCreate(
                        ['link' => $link,],
                        [
                            'post_id' => $post_id,
                            'owner_id' => 113,
                            'text' => $text,
                            'attachments' => $attachments,
                            'is_publish' => false,
                            'is_hidden' => false,
                            'network' => 'tumblr',
                            'type' => $type_post
                        ]
                    );

                }
                else{
                    $link = $value->post_url;
                    $post_id = $value->id_string;
                    $text = $messageText;
                    $type_post = 'photo';
                    $network_post = 'tumblr';
                    $attachments = [];
                    try {
                        $attachments = [$list_img[0], $list_img];
                        echo "$value->post_url\n";
                    } catch (\Exception $e) {
                        echo 'error';
                        continue;
                    }
                    
                    $is_publish = false;
                    $is_hidden = false;
                    $model = Post::firstOrCreate(
                        ['link' => $link,],
                        [
                            'post_id' => $post_id,
                            'owner_id' => 113,
                            'text' => $text,
                            'attachments' => $attachments,
                            'is_publish' => false,
                            'is_hidden' => false,
                            'network' => 'tumblr',
                            'type' => $type_post
                        ]
                    );
                }
                
            }
        }

        return Command::SUCCESS;
    }
}
