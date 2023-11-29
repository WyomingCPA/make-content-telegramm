<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Carbon\Carbon;

use App\Models\Post;

class DeleteOldPost extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'command:delete-old-post';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Удалить записи неопубликованные больше 30 дней';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $delete_post = Post::where('created_at', '<=', Carbon::now()->subDays(30)->toDateTimeString())
            ->where('is_publish', false)->delete();
        return Command::SUCCESS;
    }
}
