<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Collection;
use Laravel\Scout\Searchable;

class Person extends Model
{
    use Searchable;

    protected $guarded = ['id'];

    public static $rules = [
        'name' => 'required',
        'mail' => 'email',
        'age' => 'integer',
    ];

    public function newCollection(array $models = [])
    {
        return new MyCollection($models);
    }

    public function getNameAttribute($value)
    {
        return strtoupper($value);
    }

    public function getNameAndAgeAttribute()
    {
        return $this->name . ' (' . $this->age . ')';
    }

    public function setNameAttribute($value)
    {
        return $this->attributes['name'] = strtoupper($value);
    }

    public function setAllDataAttribute(array $values)
    {
        $this->attributes['name'] = $values[0];
        $this->attributes['mail'] = $values[1];
        $this->attributes['age'] = $values[2];
    }

    public function getAllDataAttribute()
    {
        return $this->name . '(' . $this->age . ')'
            . ' [' . $this->mail . ']';
    }

    public function toSearchableArray()
    {
        $array = $this->toArray();
        $array['reverse'] = strrev($array['name']);
        unset($array['name']);

        return $array;
    }
}

class MyCollection extends Collection
{
    public function fields()
    {
        $item = $this->first();
        return array_keys($item->toArray());
    }
}
