<?php

namespace App\Http\Controllers\telegramm;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use TelegramBot\Api\BotApi;

use App\Models\Group;
use App\Models\Post;

class BotController extends Controller
{
    public function getStatistic(Request $request)
    {
        $list_chat_id = [
            '-1002366645779' => 'sexy',
            '-1001597866737' => 'estetic_vibes',
            '-1001771871700' => 'anime',
            '-1002315592624' => 'Котики'
        ];

        $bot = new BotApi(env('TELEGRAM_TOKEN'));

        $stat = array();
        $messageText = "<b>Статистика каналов Telegramm</b>\n\n";
        foreach ($list_chat_id as $key => $value) {
            $count_channel = $bot->getChatMembersCount($key);
            $queues_count = Post::queueCount($value);
            $stat[] = array(
                'count_member' => $count_channel,
                'channel' => $value,
                'id_channel' => $key,
                'count_queues' => $queues_count,
            );
            $messageText .= "$value = $count_channel Очередь = $queues_count\n";
        }

        return response()->json([
            'message' => $messageText,
            'status' => true,
        ], 200);
    }
    public function updateStatusGroup(Request $request)
    {
        $message = '';
        $id_group = $request->id;
        $model = Group::find($id_group);
        if (!isset($model->is_start) || $model->is_start == false) {
            $model->is_start = true;
            $message = 'Группа включена';
        } else {
            $model->is_start = false;
            $message = 'Группа выключена';
        }
        $model->save();

        return response()->json([
            'message' => $message,
            'status' => true,
        ], 200);
    }
}
