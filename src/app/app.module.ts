import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { SecondcomponentComponent } from './secondcomponent/secondcomponent.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FchildComponent } from './firstcomponent/fchild/fchild.component';
import { RoutingPerameterComponent } from './routing-perameter/routing-perameter.component';
import { RparmComponent } from './rparm/rparm.component';
import { HomeComponent } from './home/home.component';
import { YourGuardComponent } from './your-guard/your-guard.component';
import { DeactivatesComponent } from './deactivates/deactivates.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import{ReactiveFormsModule}from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import{ MatButtonModule}from '@angular/material/button';
import { TableComponent } from './table/table.component';




@NgModule({
  declarations: [
    AppComponent,
    FirstcomponentComponent,
    SecondcomponentComponent,
    PagenotfoundComponent,
    FchildComponent,
    RoutingPerameterComponent,
    RparmComponent,
    HomeComponent,
    YourGuardComponent,
    DeactivatesComponent,
    TemplateDrivenComponent,
    ReactiveFormComponent,
    TableComponent,
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
