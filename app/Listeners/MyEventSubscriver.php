<?php

namespace App\Listeners;

class MyEventSubscriver
{

    public function subscribe($events)
    {
        $events->listen(
            'App\Events\PersonEvent',
            'App\Listeners\PersonEventListener@handle',
        );
    }
}
