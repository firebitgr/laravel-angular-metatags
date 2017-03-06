<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('first', function (Request $request) {
    return \App\User::limit(3)->get();
});

Route::middleware('auth:api')->get('/second/{user}', function (Request $request ,App\User $user) {
    return $user;
});
