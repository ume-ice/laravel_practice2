<?php

namespace App\Providers;

use App\MyClasses\MyService;
use App\MyClasses\PowerMyService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
        // config([
        //     'sample.data' => ['こんにちわ','どうも','さようなら'],
        // ]);

        // app()->singleton('App\MyClasses\MyService', function($app) {
        //     $myService = new MyService();
        //     $myService->setId(0);
        //     return $myService;
        // });
        // app()->when('App\MyClasses\MyService')
        //     ->needs('$id')
        //     ->give(1);
        // app()->bind('App\MyClasses\MyServiceInterface', 'App\MyClasses\PowerMyService');
        app()->resolving(function($obj, $app) {
            // echo 'セットとと222<br>';
            if (is_object($obj)) {
                echo get_class($obj) . '<br>';
            } else {
                echo $obj . '<br>';
            }
        });
        app()->resolving(PowerMyService::class, function($obj, $app) {
            // echo 'セットとと<br>';
            $newData = ['ハンバーグ', 'カレーライス', '唐揚げ', '餃子'];
            $obj->setData($newData);
            $obj->setId(rand(0, count($newData)));
        });
        app()->singleton('App\MyClasses\MyServiceInterface', 'App\MyClasses\PowerMyService');
    }
}
