<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use Tumblr\API\Client;

use TelegramBot\Api\BotApi;
use TelegramBot\Api\Types\InputMedia\InputMediaPhoto;
use TelegramBot\Api\Types\InputMedia\InputMediaVideo;
use \TelegramBot\Api\Types\InputMedia\ArrayOfInputMedia;

class MassController extends Controller
{
    public function publishSexyPost(Request $request)
    {
        $files = $request->get('list_file');
        $test = response()->json([$request->all()]);
        return response()->json([
            'status' => true,
        ], 200);
    }
}
