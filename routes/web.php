<?php

use App\Http\Middleware\HelloMiddleware;

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

// Route::get('/', function () {
//     return view('welcome');
// });

Route::view('/', 'welcome');
Route::redirect('/redirect', '/', 301);

// Route::get('/hello', 'HelloController@index')->name('hello');
// Route::get('/hello/{id}', 'HelloController@index')->where('id', '[0-9]+');
// Route::get('/other', 'HelloController@other');

Route::middleware([HelloMiddleware::class])->group(function() {
    Route::get('/hello', 'HelloController@index')->name('hello')->middleware('MyMW');
    Route::get('/hello/{id}', 'HelloController@index')->name('hello')->middleware('App\Http\Middleware\MyMiddleware::class');
    Route::post('/hello', 'HelloController@index')->name('hello');
    Route::post('/hello/other', 'HelloController@other');
});

Route::namespace('Sample')->group(function() {
    Route::get('/sample', 'SampleController@index')->name('sample');
    Route::get('/sample/other', 'SampleController@other');
});


// Route::get('/hello/{person}', 'HelloController@index');
