import { Component, OnInit } from '@angular/core';

import { ReactiveFormsModule, FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  checkoutForm: FormGroup;
  constructor(private formBuilder:FormBuilder) {
    this.checkoutForm=formBuilder.group({
      email:new FormControl('',[Validators.required]),
      passwo:new FormControl('',[Validators.required]),
      checkIn:new FormControl('',[Validators.requiredTrue]),
     } );
   
  }
  ngOnInit(): void {
  }
  postData(){
  console.log(this.checkoutForm);
 console.log("entaire form value"+this.checkoutForm.value);
//  return this.checkoutForm.get("email");
  }


}
