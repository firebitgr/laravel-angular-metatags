<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('first', function () {
	$ogTitle = 'first title';
    return view('welcome', ['ogTitle' => $ogTitle]);
});

Route::get('second/{id}', function ($id) {
	$ogTitle = 'second title';
    return view('welcome', ['ogTitle' => $ogTitle]);
});

Auth::routes();

Route::get('/home', 'HomeController@index');
