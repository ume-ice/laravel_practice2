<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use Illuminate\Support\Facades\Storage;
use App\Person;
use App\Jobs\Myjob;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        //
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        // $schedule->exec('./mycmd.sh');
        // $schedule->command('queue:work --stop-when-empty');
        // $schedule->command('inspire')
        //          ->hourly();
        $count = Person::all()->count();
        $id = rand(0, $count) + 1;
        // $obj = new ScheduleObj($id);

        // $schedule->call(new Myjob($id));

        // $schedule->call(function() use ($id) {
        //     Myjob::dispatch($id);
        // });

        $schedule->job(new Myjob($id));
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}

class ScheduleObj
{
    private $person;

    public function __construct($id)
    {
        $this->person = Person::find($id);
    }

    public function __invoke()
    {
        Storage::append('person_access_log.txt', $this->person->all_data);
        Myjob::dispatch($this->person);
        return 'true';
    }
}