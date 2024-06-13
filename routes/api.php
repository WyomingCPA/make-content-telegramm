<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\QueueController;
use App\Http\Controllers\TumblrController;
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
    Route::post('vk-mirtlenmai-all', [PostController::class, 'vkMirTlenMaiAll']);
    Route::post('vk-mirtlenmai-publish', [PostController::class, 'vkMirTlenMaiPublish']);
});
Route::group(['prefix' => 'queue', 'middleware' => 'auth:sanctum'], function () {
    Route::post('set', [QueueController::class, 'set']);
    Route::post('unset', [QueueController::class, 'unset']);
    Route::post('vk-anime', [QueueController::class, 'vkAnime']); 
    Route::post('vk-sexy', [QueueController::class, 'vkSexy']);
    Route::post('vk-estetic-vibes', [QueueController::class, 'vkEsteticVibes']);
    Route::post('vk-mirtlenmai', [QueueController::class, 'vkMirtlenMai']);
});

Route::group(['prefix' => 'tumblr', 'middleware' => 'auth:sanctum'], function () {
    Route::post('get-post', [TumblrController::class, 'getDataPostId']);
    Route::post('publish-anime-post', [TumblrController::class, 'publishAnimePost']);
});