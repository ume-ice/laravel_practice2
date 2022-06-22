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

class HelloController extends Controller
{
    private $frame;

    function __construct()
    {
        // config(['sample.message' => '新しいメッセージ！']);
        // $this->frame = 'hello.txt';
        // $myService = app('App\MyClasses\MyService');
    }

    public function index($id)
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

        $ids = explode(',', $id);
        $msg = 'get people.';
        $result = DB::table('people')
            ->whereIn('id', $ids);
            // ->get();

            dump($result);die;

        $data = [
            'msg' => $msg,
            'data' => $result,
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
