import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firstcomponent',
  templateUrl: './firstcomponent.component.html',
  styleUrls: ['./firstcomponent.component.css']
})
export class FirstcomponentComponent implements OnInit {
  constructor(private _router:Router){}
  navigateChild(){
  this._router.navigate(["first-component/fchild-component"]);
  }
  ngOnInit(): void {
  }

}
