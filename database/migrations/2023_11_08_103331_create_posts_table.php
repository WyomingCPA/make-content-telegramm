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
        Schema::create('posts', function (Blueprint $table) {
            $table->id();
            $table->integer('post_id');
            $table->integer('owner_id');
            $table->string('text', 2000);
            $table->string('link');
            $table->json('attachments');
            $table->enum('type', ['photo', 'video'])->default('photo');
            $table->enum('network', ['vk', 'tumblr'])->default('vk');
            $table->boolean('is_publish')->unsigned()->nullable();
            $table->boolean('is_hidden')->unsigned()->nullable();
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
        Schema::dropIfExists('posts');
    }
};
