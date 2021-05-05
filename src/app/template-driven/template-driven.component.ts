import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  constructor() { }
  loginUser(signin:NgForm){
console.log(signin);
console.log(signin.value.emailAddress);
console.log(signin.value.password);
console.log(signin.value.chechboxField);
  }
  ngOnInit(): void {
  }

}
