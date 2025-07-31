<?php

namespace App\Console\Commands\telegram;

use Illuminate\Console\Command;

use App\Models\Post;
use App\Models\User;


class ChechIsFile extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:check-is-file';

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
        $user = User::select('id')->where('email', 'WyomingCPA@yandex.ru')->first();
        $favorite_ids = $user->queuesPost->pluck('id')->toArray();
        $objects = Post::where('is_publish', false)
            ->whereIn('owner_id', [313, 213])
            ->where('type', 'photo')
            ->where('network', 'telegramm')
            ->where('is_hidden', false)
            //->whereIn('id', $favorite_ids)
            ->orderBy('created_at', 'desc');

        //echo $objects->count();
        foreach ($objects->get() as $item) {
            //echo $item->attachments[0] . "\n";
            if ($this->urlIsOk($item->attachments[0])) {
                echo "Файл найден\n";
            } else {
                Post::destroy($item->id);
                echo "Файл не найден удаляем пост\n";
            }
        }

        return Command::SUCCESS;
    }

    public function urlIsOk($url)
    {
        $headers = @get_headers($url);
        $httpStatus = intval(substr($headers[0], 9, 3));
        if ($httpStatus < 400) {
            return true;
        }
        return false;
    }
}
