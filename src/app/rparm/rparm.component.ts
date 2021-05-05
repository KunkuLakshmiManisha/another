import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rparm',
  templateUrl: './rparm.component.html',
  styleUrls: ['./rparm.component.css']
})
export class RparmComponent implements OnInit {
 public deId:any;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
   let idl= this.route.snapshot.paramMap.get('id');
  this.deId=idl;
  }

}
