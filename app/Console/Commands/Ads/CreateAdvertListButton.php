<?php

namespace App\Console\Commands\Ads;

use Illuminate\Console\Command;

use Illuminate\Support\Facades\Auth;
use App\Models\Category;
use App\Models\Post;
use App\Models\User;
use App\Models\Group;
use App\Models\Views;
use App\Models\AdsMessage;
use Carbon\Carbon;
use TelegramBot\Api\BotApi;
use TelegramBot\Api\Types\InputMedia\InputMediaPhoto;
use \TelegramBot\Api\Types\InputMedia\ArrayOfInputMedia;
use TelegramBot\Api\Types\Inline\InlineKeyboardMarkup;

class CreateAdvertListButton extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:create-advert-list-button';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Команда публикует ссылки в виде кнопок на мини апп телеграмм';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $bot = new BotApi(env('TELEGRAM_TOKEN'));
        // ID группы или канала, куда отправляем
        //$chatId = -414528593;
        $ttlHours = 3; //Время жизни сообщения в часах
        $text = "🔥🔥🔥🔥🔥🔥🔥";

        $chatIds = [
            //-414528593,
            -1002366645779,
            -1001771871700,
        ];
        // Создаём inline-клавиатуру
        $keyboard = new InlineKeyboardMarkup([
            [
                ['text' => '🗝️❤ Тайник Кати', 'url' => 'https://t.me/Kktaybot?start=_tgr_9GEHI7wxYzJi'],
                ['text' => '🤖✨Flirr AI', 'url' => 'https://t.me/flirrbot?start=_tgr_bI4qgcg0Mjdi'],
                ['text' => '💡📱 Simple GPT', 'url' => 'https://t.me/SimpleGPT_robot?start=_tgr_tvz47YZiMjFi'],
            ],
            [
                ['text' => 'Премиум храм', 'url' => 'https://t.me/Vipkhrambot?start=_tgr_lq47oLxiMTVi'],
                ['text' => '🔒Prison', 'url' => 'https://t.me/tonprison_bot?start=_tgr_sm1N5pE1ZDYy'],
                ['text' => 'Blocus AI', 'url' => 'https://t.me/blocusai_bot?start=_tgr_hqPTJbo0YmUy'],
            ],
            [
                ['text' => '🔥Trusty Talk (18+)', 'url' => 'https://t.me/TrustyTalkBot?start=_tgr_fPuzn3kyYjAy'],
                ['text' => '🌸💭Waifu Dream', 'url' => 'https://t.me/Waifu_Dream_bot?start=_tgr_C85ksgg3YzFi'],
                ['text' => '🌙✨Ira moon', 'url' => 'https://t.me/Iramoonrobot?start=_tgr_5e3XPDQwNzEy'],
            ],
            [
                ['text' => '🔥💋Hot Chat AI (18+)', 'url' => 'https://t.me/HotChatAI_bot?start=_tgr_bmXscewzN2Ji'],
                ['text' => '💘Date Me', 'url' => 'https://t.me/datemeai_bot?start=_tgr_lkZsR0M5OTQ6'],
                ['text' => '🎁✨Случайный подарок', 'url' => 'https://t.me/randgift_bot?start=_tgr_WpyvtYc2MDdi'],
            ],
        ]);
        foreach ($chatIds as $chatId) {
            $message = $bot->sendMessage(
                $chatId,
                $text,
                'HTML',
                false,
                null,
                $keyboard
            );

            $messageId = $message->getMessageId();

            AdsMessage::create([
                'chat_id' => $chatId,
                'message_id' => $messageId,
                'delete_after' => Carbon::now()->addHours($ttlHours),
            ]);
        }

        return Command::SUCCESS;
    }
}
