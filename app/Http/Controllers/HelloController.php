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

        // DB::table('people')->insert(['name'=>'test4', 'age'=> 18, 'mail'=>'test4@gmail.com']);
        // DB::table('people')->insert(['name'=>'test5', 'age'=> 18, 'mail'=>'test5@gmail.com']);
        // DB::table('people')->insert(['name'=>'test6', 'age'=> 18, 'mail'=>'test6@gmail.com']);

        Person::get(['*'])->searchable();

        $msg = 'show people record.';
        $result = Person::get();

        $data = [
            'input' => '',
            'msg' => $msg,
            'data' => $result,
        ];
        return view('hello.index', $data);
    }

    public function save($id, $name)
    {
        $record = Person::find($id);
        $record->name = $name;
        $record->save();
        return redirect()->route('hello');
    }

    public function other()
    {
        $record = new Person();
        $record->all_data = ['aaa', 'bbb@ccc', 1234];
        $record->save();
        return redirect()->route('hello');
    }

    public function json($id = -1)
    {
        if ($id == -1) {
            return Person::get()->toJson();
        } else {
            return Person::find($id)->toJson();
        }
    }

    public function send(Request $request)
    {

        $input = $request->input('find');
        $msg = 'search: ' . $input;
        $result = Person::search($input)->get();

        $data = [
            'input' => $input,
            'msg' => $msg,
            'data' => $result,
        ];

        return view('hello.index', $data);
    }

}
