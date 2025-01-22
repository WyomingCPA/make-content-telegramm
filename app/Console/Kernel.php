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
        $schedule->command('command:publish-anime-queue')->everyTwoHours();
        $schedule->command('command:publish-anime2-queue')->everyThreeHours();
        $schedule->command('command:publish-sexy-queue')->everyTwoHours();
        $schedule->command('command:publish-sexy-double-queue')->everyThreeHours();
        $schedule->command('command:publish-esteticvibes-queue')->everyFourHours();
        $schedule->command('command:publish-cats-queue')->everyFourHours();
        $schedule->command('command:mirtlenmai-queue')->everyFourHours();
        $schedule->command('command:get-statistic')->everyFourHours();
        $schedule->command('command:get-tumblr-post-cats')->hourly();
        $schedule->command('command:get-tumblr-post-sexy')->hourly();
        $schedule->command('command:get-tumblr-post-anime')->hourly();
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
