<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ads_posts', function (Blueprint $table) {
            $table->id();
            $table->string('title')->nullable(); // заголовок (опционально)
            $table->text('text'); // текст поста
            $table->json('buttons')->nullable(); // JSON с кнопками (inline)
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ads_posts');
    }
};
