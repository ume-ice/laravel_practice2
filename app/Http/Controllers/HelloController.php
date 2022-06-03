<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;
use App\Person;
use App\MyClasses\MyService;
use App\MyClasses\MyServiceInterface;

class HelloController extends Controller
{
    private $frame;

    function __construct()
    {
        // config(['sample.message' => '新しいメッセージ！']);
        // $this->frame = 'hello.txt';
        // $myService = app('App\MyClasses\MyService');
    }

    public function index(MyServiceInterface $myService, int $id = -1)
    {
        $myService->setId($id);
        $data = [
            'msg' => $myService->say(),
            'data' => $myService->alldata(),
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
