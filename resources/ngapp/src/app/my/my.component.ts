import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import axios from 'axios';


@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements OnInit {

  message: string;
  input: FormControl;

  constructor() { }

  ngOnInit() {
    this.message = 'please input your name:';
    this.input = new FormControl('noname');
  }

  doAction() {
    axios.get('/hello/json/' + this.input.value)
      .then(response =>{
          let person = response.data;
          let msg = person.id + ':' + person.name
              + ' [' + person.mail + '] ('
              + person.age + ')';
          this.message = msg;
      });
  }
}