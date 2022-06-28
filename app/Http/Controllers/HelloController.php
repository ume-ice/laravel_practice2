<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;
use App\Person;
// use App\MyClasses\MyService;
use App\MyClasses\MyServiceInterface;
use App\Facades\MyService;
use Illuminate\Support\Facades\DB;
use App\Http\Pagination\MyPaginator;

class HelloController extends Controller
{
    private $frame;

    function __construct()
    {
        // config(['sample.message' => '新しいメッセージ！']);
        // $this->frame = 'hello.txt';
        // $myService = app('App\MyClasses\MyService');
    }

    public function index(Request $request)
    {
        // if ($id >= 0) {
        //     $msg = 'get name like "' . $id . '"';
        //     $result = [DB::table('people')->find($id)];
        // } else {
        //     $msg = 'get people records';
        //     $result = DB::table('people')->get();
        // }
        // $name = DB::table('people')->pluck('name');
        // $value = $name->toArray();
        // $msg = implode(', ', $value);
        // $result = DB::table('people')->get();

        // $data = ['msg' => '', 'data' => []];
        // $msg = 'get: ';
        // $result = [];
        // $count = 0;
        // DB::table('people')
        //     ->chunkById(3, function($items) use (&$msg, &$result, &$id, &$count){
        //         if ($count == $id) {
        //             foreach($items as $item) {
        //                 $msg .= $item->id . ':' . $item->name . ' ';
        //                 $result += array_merge($result, [$item]);
        //                 return false;
        //             }
        //         }
        //         $count++;
        //         return true;
        //     });

        // $id = $request->query('page');
        $msg = 'show people record.';

        $even = Person::get()->filter(function($item) {
            return $item->id % 2 == 0;
        });
        $even2 = Person::get()->filter(function($item) {
            return $item->age % 2 == 0;
        });

        $map = $even->map(function($item, $key) {
            return $item->id . ':' . $item->name;
        });

        // DB::table('people')->insert(['name'=>'test4', 'age'=> 18, 'mail'=>'test4@gmail.com']);
        // DB::table('people')->insert(['name'=>'test5', 'age'=> 18, 'mail'=>'test5@gmail.com']);
        // DB::table('people')->insert(['name'=>'test6', 'age'=> 18, 'mail'=>'test6@gmail.com']);

        $result = $even->merge($even2);

        // $result = Person::get()->except($even);

        $data = [
            'msg' => $map,
            'data' => $even,
        ];
        return view('hello.index', $data);
    }

    public function other(Request $request)
    {
        // $data = [
        //     'msg' => $request->bye,
        // ];
        // return view('hello.index', $data);
        // $data = Storage::get($this->frame) . PHP_EOL . $msg;

        // if (Storage::disk('public')->exists('bk_' . $this->frame)) {
        //     Storage::disk('public')->delete('bk_' . $this->frame);
        // }
        // Storage::disk('public')->copy($this->frame, 'bk_' . $this->frame);

        // if (Storage::disk('local')->exists('bk_' . $this->frame)) {
        //     Storage::disk('local')->delete('bk_' . $this->frame);
        // }
        $ext = '.'.$request->file('file')->extension();
        Storage::disk('public')->putFileAs('files', $request->file('file'), 'uploaded' . $ext);
        return redirect()->route('hello');
    }
}
