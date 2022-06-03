<?php

namespace App\MyClasses;

interface MyServiceInterface
{
    public function setId(int $id);
    public function say();
    public function data(int $id);
    public function alldata();
}
