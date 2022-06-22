<?php

namespace App\Http\Middleware;

use Closure;
use App\Facades\MyService;

class MyMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        // before start
        // $id = rand(0, count(MyService::alldata())-1);
        // MyService::setId($id);
        // $merge_data = [
        //     'id' => $id,
        //     'msg' => MyService::say(),
        //     'alldata' => MyService::alldata(),
        // ];
        // $request->merge($merge_data);
        // before end

        $response = $next($request);

        // after start
        // $content = $response->content();
        // $content .= '<style>
        // body { background-color: #eef; }
        // p { font-size: 18pt; }
        // li { color: red; font-weight: bold; }
        // </style>';
        // $response->setContent($content);
        // after end

        return $response;
    }
}
