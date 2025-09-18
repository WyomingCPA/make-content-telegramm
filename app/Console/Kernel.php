<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        //$schedule->command('command:get-vk-anime')->hourly();
        //$schedule->command('command:get-vk-estetic-vibes')->hourly();
        //$schedule->command('command:get-vk-sexygirl')->hourly();
        //$schedule->command('command:get-vk-mirtlenmai')->hourly();
        $schedule->command('command:get-vk-post')->hourly();
        $schedule->command('command:get-rss-habr')->hourly();
        $schedule->command('command:send-new-post')->everyTwoHours();
        $schedule->command('command:delete-old-post')->everyTwoHours();
        $schedule->command('command:publish-anime-queue')->hourly();
        $schedule->command('command:publish-anime2-queue')->everyThreeHours();
        $schedule->command('command:publish-sexy-queue')->everyTwoHours();
        //$schedule->command('command:publish-sexy-double-queue')->everyThreeHours();
        $schedule->command('command:publish-esteticvibes-queue')->everySixHours();
        $schedule->command('command:publish-cats-queue')->everySixHours();

        $schedule->command('command:publish-cats-video-tumblr-queue')->everyThreeHours();
        $schedule->command('command:publish-sexy-video-tumblr-queue')->everyThreeHours();
        $schedule->command('command:publish-sexy-photo-tumblr-queue')->everyThreeHours();
        $schedule->command('command:publish-anime-photo-tumblr-queue')->everyThreeHours();

        //$schedule->command('command:mirtlenmai-queue')->everyFourHours();
        //$schedule->command('command:get-statistic')->everyFourHours();
        $schedule->command('command:get-tumblr-post-cats')->hourly();
        $schedule->command('command:get-tumblr-post-sexy')->hourly();
        $schedule->command('command:get-tumblr-post-anime')->hourly();

        $schedule->command('command:get-telegramm-post-sexy')->hourly();
        $schedule->command('command:get-telegram-photo-anime')->hourly();
        $schedule->command('command:get-telegramm-post-sexy-video')->hourly();
        $schedule->command('command:get-telegramm-post-cats')->hourly();
        $schedule->command('command:get-telegram-video-cats')->hourly();


        $schedule->command('command:publish-sexy-photo-telegram-queue')->everyTwoHours();
        $schedule->command('command:publish-anime-photo-telegram-queue')->everyTwoHours();
        $schedule->command('command:publish-sexy-video-telegramm-queue')->everyThreeHours();
        $schedule->command('command:publish-cats-video-telegramm-queue')->everyThreeHours();
        $schedule->command('command:publish-cats-photo-telegram-queue')->everyTwoHours();
        $schedule->command('command:get-views-my-groups')->everyFifteenMinutes();

        //support
        $schedule->command('command:check-is-file')->daily();

        //advert
        $schedule->command('command:create-sexy-ads')->daily();
        $schedule->command('command:create-anime-ads')->daily();
        $schedule->command('command:delete-ads')->everyThreeHours();
        
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
