import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routing-perameter',
  templateUrl: './routing-perameter.component.html',
  styleUrls: ['./routing-perameter.component.css']
})
export class RoutingPerameterComponent implements OnInit {
  departments=[
    {'id':1,'name':'angular'},
    {'id':2,'name':'html'},
    {'id':3,'name':'css'},
    {'id':4,'name':'javascript'},
  ]

  constructor(private _router:Router) { }

  ngOnInit(): void {
  }
  select(a:any){
    this._router.navigate(['./Rperms',a.id]);
  }
}
