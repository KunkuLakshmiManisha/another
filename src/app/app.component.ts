import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})  
export class AppComponent {
  route: ActivatedRoute | null | undefined;
  constructor(private _router:Router){}
  navigateToFirst(){
  this._router.navigate(["./first-component"]);
  }
  navigateToSecond(){
  //this._router.navigate(["second-component"]);
  this._router.navigate(['./second-component'], { relativeTo: this.route });

}
data={
data:"string of data"
}
customer(){
  this._router.navigate(['./customers',this.data]);
}
order(){
  this._router.navigate(['./orders'])
}

}

