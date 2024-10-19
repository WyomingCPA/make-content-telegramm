<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use TelegramBot\Api\BotApi;
use TelegramBot\Api\Types\InputMedia\InputMediaPhoto;
use TelegramBot\Api\Types\InputMedia\ArrayOfInputMedia;

use Tumblr\API\Client;

use App\Models\Post;


class TelegrammController extends Controller
{
    public function getDataPostId(Request $request)
    {
        return response()->json([
            'status' => true,
        ], 200);
    }
}
