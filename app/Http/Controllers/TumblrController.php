<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Category;
use App\Models\Post;
use App\Models\User;

use Tumblr\API\Client;

use TelegramBot\Api\BotApi;
use TelegramBot\Api\Types\InputMedia\InputMediaPhoto;
use TelegramBot\Api\Types\InputMedia\InputMediaVideo;
use \TelegramBot\Api\Types\InputMedia\ArrayOfInputMedia;

class TumblrController extends Controller
{
    public function publishEsteticVibes(Request $request)
    {
        $list_img = $request->get('list_img');
        $tags_array = $request->get('tags');
        $list_video =  $request->get('list_video');
        $messageText = '';

        if (!empty($tags_array)) {
            foreach ($tags_array as $tag) {
                $tagText = str_replace(' ', '_', $tag);
                $messageText .= " #$tagText";
            }
        }
        $messageText .= "\n";
        if (!empty($messageText)) {
            $chatId = '-1001597866737';
            //$chatId = '-414528593';
            $bot = new BotApi(env('TELEGRAM_TOKEN'));
            //$bot->sendMessage($chatId, $messageText, 'HTML');

            $media = new ArrayOfInputMedia();
            $messageText .= " #nature #travel \n\n\n<a href='https://t.me/estetic_vibes_tg'>Estetic Vibes</a>";
            if (!empty($list_video)) {
                foreach ($list_video as $item_video) {
                    $media->addItem(new InputMediaVideo($item_video, $messageText, 'HTML'));
                }
            } else {
                foreach ($list_img as $item_image) {
                    $media->addItem(new InputMediaPhoto($item_image, $messageText, 'HTML'));
                }
            }

            $bot->sendMediaGroup($chatId, $media);
        }
        return response()->json([
            'status' => true,
        ], 200);
    }
    public function publishAnimePost(Request $request)
    {
        $list_img = $request->get('list_img');
        $tags_array = $request->get('tags');
        $list_video =  $request->get('list_video');
        $messageText = '';
        if (!empty($tags_array)) {
            foreach ($tags_array as $tag) {
                $tagText = str_replace(' ', '_', $tag);
                $messageText .= " #$tagText";
            }
        }
        $messageText .= "\n";
        if (!empty($messageText)) {
            $chatId = '-1001771871700';
            //$chatId = '-414528593';
            $bot = new BotApi(env('TELEGRAM_TOKEN'));
            //$bot->sendMessage($chatId, $messageText, 'HTML');

            $media = new ArrayOfInputMedia();
            $messageText .= " #anime #art #tyan \n\n\n<a href='https://t.me/+ATd62K2jKB43YzIy'>Anime_Tyn_TG</a>";
            if (!empty($list_video)) {
                foreach ($list_video as $item_video) {
                    $media->addItem(new InputMediaVideo($item_video, $messageText, 'HTML'));
                }
            } else {
                foreach ($list_img as $item_image) {
                    $media->addItem(new InputMediaPhoto($item_image, $messageText, 'HTML'));
                }
            }

            $bot->sendMediaGroup($chatId, $media);
        }
        return response()->json([
            'status' => true,
        ], 200);
    }
    public function publishSexy(Request $request)
    {
        $list_img = $request->get('list_img');
        $tags_array = $request->get('tags');
        $list_video =  $request->get('list_video');
        $messageText = '';
        if (!empty($tags_array)) {
            foreach ($tags_array as $tag) {
                $tagText = str_replace(' ', '_', $tag);
                $messageText .= " #$tagText";
            }
        }
        $messageText .= "\n";
        if (!empty($messageText)) {
            $chatId = '-1001866603682';
            //$chatId = '-414528593';
            $bot = new BotApi(env('TELEGRAM_TOKEN'));
            //$bot->sendMessage($chatId, $messageText, 'HTML');

            $media = new ArrayOfInputMedia();
            $messageText .= "#girl #body #fit \n\n\n<a href='https://t.me/+HARJVgHVnPE5NTky'>World of Beauties</a>";
            if (!empty($list_video)) {
                foreach ($list_video as $item_video) {
                    $media->addItem(new InputMediaVideo($item_video, $messageText, 'HTML'));
                }
            } else {
                foreach ($list_img as $item_image) {
                    $media->addItem(new InputMediaPhoto($item_image, $messageText, 'HTML'));
                }
            }

            $bot->sendMediaGroup($chatId, $media);
        }
        return response()->json([
            'status' => true,
        ], 200);
    }
    public function publishCatsPost(Request $request)
    {
        $list_img = $request->get('list_img');
        $tags_array = $request->get('tags');
        $list_video =  $request->get('list_video');
        $messageText = '';
        if (!empty($tags_array)) {
            foreach ($tags_array as $tag) {
                $tagText = str_replace(' ', '_', $tag);
                $messageText .= " #$tagText";
            }
        }
        $messageText .= "\n";
        if (!empty($messageText)) {
            $chatId = '-1002315592624';
            //$chatId = '-414528593';
            $bot = new BotApi(env('TELEGRAM_TOKEN'));
            //$bot->sendMessage($chatId, $messageText, 'HTML');

            $media = new ArrayOfInputMedia();
            $messageText .= "#cats \n\n\n<a href='https://t.me/+7yj6MB0l529lZmRi'>Котики ≽^•⩊•^≼</a>";

            if (!empty($list_video)) {
                foreach ($list_video as $item_video) {
                    $media->addItem(new InputMediaVideo($item_video, $messageText, 'HTML'));
                }
            } else {
                foreach ($list_img as $item_image) {
                    $media->addItem(new InputMediaPhoto($item_image, $messageText, 'HTML'));
                }
            }

            $bot->sendMediaGroup($chatId, $media);
        }
        return response()->json([
            'status' => true,
        ], 200);
    }
    public function getDataPostId(Request $request)
    {
        $url = $request->get('url');
        $values = parse_url($url);
        $array =  explode("/", $values['path']);
        $nameBlog = $array[1];
        $idPost = $array[2];

        $consumer_key = env('CONSUMER_KEY');
        $consumer_secret = env('CONSUMER_SECRET');
        $token_key = env('TOKEN_KEY');
        $token_secret = env('TOKEN_SECRET');

        $client = new Client($consumer_key, $consumer_secret);
        $client->setToken($token_key, $token_secret);
        $options = [];
        $post = $client->getRequest("v2/blog/$nameBlog/posts/$idPost", $options, false);

        $tags = [];
        foreach ($post->tags as $item) {
            $tags[] = $item;
        }
        $list_img = [];
        $list_video = [];
        foreach ($post->content as $item) {
            if ($item->type === 'image') {
                $list_img[] = $item->media[0]->url;
                if (exif_imagetype($item->media[0]->url) == IMAGETYPE_GIF) {
                    $list_video[] = $item->media[0]->url;
                }
            }
            if ($item->type === 'video') {
                $list_img[] = $item->poster[0]->url;
                $list_video[] = $item->url;
            }
        }
        return response()->json([
            'status' => true,
            'list_img' => $list_img,
            'list_video' => $list_video,
            'tags' => $tags,
        ], 200);
    }
}
