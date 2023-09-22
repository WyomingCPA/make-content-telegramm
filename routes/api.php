<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;
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
	Route::get('/index', 'DashboardController@index');
});

Route::group(['prefix' => 'post', 'middleware' => 'auth:sanctum'], function () {
	Route::post('rss-habr-all', [PostController::class, 'rssHabrAll']);
    Route::post('rss-habr-publish', [PostController::class, 'rssHabrPublish']);
});