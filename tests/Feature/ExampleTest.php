<?php

namespace Tests\Feature;

use DatabaseSeeder;
use App\Person;
use Tests\TestCase;
use Illuminate\Foundation\Testing\RefreshDatabase;

class ExampleTest extends TestCase
{
    use RefreshDatabase;

    /**
     * A basic test example.
     *
     * @return void
     */
    public function testBasicTest()
    {
        // $this->get('/')->assertStatus(200);
        // $this->get('/hello')->assertOk();
        // $this->post('/hello')->assertOk();
        // $this->post('/hoge')->assertStatus(404);
        // $this->post('/hello')->assertSeeText('index');
        // $this->post('/hello')->assertSee('<h1>');
        // $this->post('/hello')->assertSeeInOrder(['<html','<head','<body','<h1']);
        // $this->post('/hello/json/1')->assertSeeText('YAMADA-TARO');
        // $this->post('/hello/json/2')->assertExactJson([
        //     'id' => 2,
        //     'name' => 'HANAKO',
        //     'mail' => 'hanako@flower',
        //     'age' => '19',
        //     'created_at' => '2020-10-10 00:00:00',
        //     'updated_at' => '2020-10-10 01:00:00',
        // ]);

        $this->seed(DatabaseSeeder::class);

        // $data = [
        //     'id' => 1,
        //     'name' => 'DUMMY',
        //     'mail' => 'dummy@mail',
        //     'age' => '0',
        // ];

        $person = Person::find(1);
        $data = $person->toArray();
        // $person->fill($data)->save();
        $this->assertDatabaseHas('people',$data);

        // $person->name = 'NOT-DUMMY';
        // $person->save();
        // $this->assertDatabaseMissing('people',$data);
        // $data['name'] = 'NOT-DUMMY';
        // $this->assertDatabaseHas('people',$data);

        $person->delete();
        $this->assertDatabaseMissing('people',$data);
    }
}
