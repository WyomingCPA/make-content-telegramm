<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use Carbon\Carbon;
use TelegramBot\Api\BotApi;

use App\Models\Statistic;
use App\Models\Post;


class GetStatistics extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:get-statistic';

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
        $list_chat_id = [
            '-1001723315292' => 'it channel', '-1001866603682' => 'sexy', '-1001597866737' => 'estetic_vibes',
            '-1001771871700' => 'anime', '-1002082778220' => 'mir tlen mai'
        ];

        $bot = new BotApi(env('TELEGRAM_TOKEN'));

        $stat = array();
        $messageText = "<b>Статистика каналов Telegramm</b>\n\n";
        foreach ($list_chat_id as $key => $value) {
            $count_channel = $bot->getChatMembersCount($key);
            $queues_count = Post::queueCount($value);
            $stat[] = array(
                'count_member' => $count_channel,
                'channel' => $value, 'id_channel' => $key,
                'count_queues' => $queues_count,
            );
            $messageText .= "$value = $count_channel Очередь = $queues_count\n";
        }

        $model = Statistic::create([
            'data' => json_encode($stat),
        ]);

        $chatId = '-414528593';

        $bot->sendMessage($chatId, $messageText, 'HTML');
        return Command::SUCCESS;
    }
}
