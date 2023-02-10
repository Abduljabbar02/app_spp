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
        Schema::create('pay_spps', function (Blueprint $table) {
            $table->id();
            $table->integer('total_tagihan');
            $table->integer('jumlah_bayar');
            $table->string('tanggal_bayar');
            $table->integer('tahun_ajaran');
            $table->foreignId('user_id');
            $table->foreignId('kelas_id');
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
        Schema::dropIfExists('pay_spps');
    }
};
