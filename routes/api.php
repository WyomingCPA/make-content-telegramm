<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\QueueController;
use App\Http\Controllers\TumblrController;
use App\Http\Controllers\TelegrammController;
use App\Http\Controllers\GroupController;
use App\Http\Controllers\MassController;
use App\Http\Controllers\telegramm\BotController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', 'AuthController@register');

Route::group(['prefix' => 'dashboard', 'middleware' => 'auth:sanctum'], function () {
	Route::get('index', [DashboardController::class, 'index']);
});

Route::group(['prefix' => 'post', 'middleware' => 'auth:sanctum'], function () {
	Route::post('rss-habr-all', [PostController::class, 'rssHabrAll']);
    Route::post('rss-habr-publish', [PostController::class, 'rssHabrPublish']);
    Route::post('vk-anime-publish', [PostController::class, 'vkAnimePublish']);
    Route::post('vk-anime-set-queue', [PostController::class, 'vkAnimeSetQueue']);
    Route::post('vk-sexy-all', [PostController::class, 'vkSexyAll']);
    Route::post('vk-sexy-release', [PostController::class, 'vkSexyRelease']);
    Route::post('vk-sexy-publish', [PostController::class, 'vkSexyPublish']);
    Route::post('tumbrl-anime-publish', [PostController::class, 'tumblrAnimePublish']);  
    Route::post('post-hidden ', [PostController::class, 'postHidden']);
    Route::post('vk-anime-all', [PostController::class, 'vkAnimeAll']);
    Route::post('vk-anime-release', [PostController::class, 'vkAnimeRelease']);
    Route::post('vk-estetic-vibes-all', [PostController::class, 'vkEsteticVibesAll']);
    Route::post('vk-estetic-vibes-publish', [PostController::class, 'vkEsteticVibesPublish']);
    Route::post('vk-esteticvibes-release', [PostController::class, 'vkEsteticVibesRelease']);
    Route::post('vk-mirtlenmai-all', [PostController::class, 'vkMirTlenMaiAll']);
    Route::post('vk-mirtlenmai-publish', [PostController::class, 'vkMirTlenMaiPublish']);
    Route::post('vk-cats-publish', [PostController::class, 'vkCatsPublish']);
    Route::post('vk-cats-all', [PostController::class, 'vkCatsAll']);
    Route::post('delete', [PostController::class, 'delete']);
});
Route::group(['prefix' => 'queue', 'middleware' => 'auth:sanctum'], function () {
    Route::post('set', [QueueController::class, 'set']);
    Route::post('unset', [QueueController::class, 'unset']);
    Route::post('vk-anime', [QueueController::class, 'vkAnime']); 
    Route::post('vk-sexy', [QueueController::class, 'vkSexy']);
    Route::post('vk-cats', [QueueController::class, 'vkCats']);
    Route::post('vk-estetic-vibes', [QueueController::class, 'vkEsteticVibes']);
    Route::post('vk-mirtlenmai', [QueueController::class, 'vkMirtlenMai']);
    Route::post('telegramm-photo-sexy', [QueueController::class, 'telegrammPhotoSexy']);
    Route::post('telegramm-video-sexy', [QueueController::class, 'telegrammVideoSexy']);  
});

Route::group(['prefix' => 'groups', 'middleware' => 'auth:sanctum'], function () {
    Route::post('index', [GroupController::class, 'index']);
    Route::post('store', [GroupController::class, 'store']);
    Route::post('update-status', [GroupController::class, 'updateStatus']);
    Route::post('update', [GroupController::class, 'update']);
    Route::get('edit/{id}', [GroupController::class, 'edit']);
    Route::post('add-source', [GroupController::class, 'addSource']);
    Route::post('get-source', [GroupController::class, 'getSource']);
    Route::post('delete-source', [GroupController::class, 'deleteSource']);
    Route::post('delete-group', [GroupController::class, 'deleteGroup']);
    Route::post('update-parce-groups', [GroupController::class, 'updateParceGroups']);
    Route::get('source-edit/{id}', [GroupController::class, 'sourceEdit']);
    Route::post('source-update', [GroupController::class, 'sourceUpdate']);
});

Route::group(['prefix' => 'tumblr', 'middleware' => 'auth:sanctum'], function () {
    Route::post('get-post', [TumblrController::class, 'getDataPostId']);
    Route::post('publish-anime-post', [TumblrController::class, 'publishAnimePost']);
    Route::post('estetic-vibes-post', [TumblrController::class, 'publishEsteticVibes']);
    Route::post('sexy-post', [TumblrController::class, 'publishSexy']);
    Route::post('publish-cats-post', [TumblrController::class, 'publishCatsPost']);
    Route::post('cats-video-all', [TumblrController::class, 'catsVideoAll']);
    Route::post('cats-photo-all', [TumblrController::class, 'catsPhotoAll']);
    Route::post('sexy-video-all', [TumblrController::class, 'sexyVideoAll']);
    Route::post('sexy-photo-all', [TumblrController::class, 'sexyPhotoAll']);
    Route::post('anime-photo-all', [TumblrController::class, 'animePhotoAll']);
    Route::post('nature-photo-all', [TumblrController::class, 'naturePhotoAll']);
    Route::post('anime-video-all', [TumblrController::class, 'animeVideoAll']);
    Route::post('cats-video-tumblr-publish', [TumblrController::class, 'catsVideoPublish']);
    Route::post('cats-video-tumblr-publish', [TumblrController::class, 'catsVideoPublish']);
    Route::post('cats-advert-video-tumblr-publish', [TumblrController::class, 'catsAdvertVideoPublish']);
    Route::post('anime-advert-photo-tumblr-publish', [TumblrController::class, 'animeAdvertPhotoPublish']);
    Route::post('sexy-advert-photo-tumblr-publish', [TumblrController::class, 'sexyAdvertPhotoPublish']);
    Route::post('sexy-video-tumblr-publish', [TumblrController::class, 'sexyVideoPublish']);
    Route::post('sexy-photo-tumblr-publish', [TumblrController::class, 'sexyPhotoPublish']);
    Route::post('anime-photo-tumblr-publish', [TumblrController::class, 'animePhotoPublish']);
    Route::post('anime-video-tumblr-publish', [TumblrController::class, 'animeVideoPublish']);
});
Route::group(['prefix' => 'telegramm', 'middleware' => 'auth:sanctum'], function () {
    Route::post('get-post', [TelegrammController::class, 'getDataPostId']);
    Route::post('sexy-photo-all', [TelegrammController::class, 'sexyPhotoAll']);
    Route::post('sexy-photo-telegram-publish', [TelegrammController::class, 'sexyPhotoPublish']);
    Route::post('sexy-video-all', [TelegrammController::class, 'sexyVideoAll']);
    Route::post('sexy-video-publish', [TelegrammController::class, 'sexyVideoPublish']);
    Route::post('cats-video-publish', [TelegrammController::class, 'catsVideoPublish']);  
    Route::post('anime-photo-all', [TelegrammController::class, 'animePhotoAll']);
    Route::post('anime-photo-telegram-publish', [TelegrammController::class, 'animePhotoPublish']);
    Route::post('cats-photo-all', [TelegrammController::class, 'catsPhotoAll']);
    Route::post('cats-video-all', [TelegrammController::class, 'catsVideoAll']);
});
Route::group(['prefix' => 'mass', 'middleware' => 'auth:sanctum'], function () {
    Route::post('publish-sexy-post', [MassController::class, 'publishSexyPost']);
});

Route::group(['prefix' => 'telegramm-bot',], function () {
    Route::post('update-status-group', [BotController::class, 'updateStatusGroup']);
    Route::post('get-statistic', [BotController::class, 'getStatistic']);
    Route::get('get-status-group', [BotController::class, 'getStatusGroups']);
});