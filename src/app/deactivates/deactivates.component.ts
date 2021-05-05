import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deactivates',
  templateUrl: './deactivates.component.html',
  styleUrls: ['./deactivates.component.css']
})
export class DeactivatesComponent implements OnInit {

 
  canExit():boolean{
    if(confirm("Do you wish to please confirm")){
      return true
    }else{
      return false
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
