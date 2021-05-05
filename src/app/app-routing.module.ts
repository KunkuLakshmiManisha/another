import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanDeactGuard } from './can-deact.guard';
import { CanLoadGuard } from './can-load.guard';
import { ChildGuard } from './child.guard';
import { DeactivatesComponent } from './deactivates/deactivates.component';
import { FchildComponent } from './firstcomponent/fchild/fchild.component';
import { FirstcomponentComponent } from './firstcomponent/firstcomponent.component';
import { HomeComponent } from './home/home.component';
import { OrdersComponent } from './orders/orders.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RoutingPerameterComponent } from './routing-perameter/routing-perameter.component';
import { RparmComponent } from './rparm/rparm.component';
import { SecondcomponentComponent } from './secondcomponent/secondcomponent.component';
import { TableComponent } from './table/table.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { YourGuardGuard } from './your-guard.guard';
import { YourGuardComponent } from './your-guard/your-guard.component';

const routes: Routes = [
//   {path:"first-component", component:FirstcomponentComponent,
//   canActivateChild:[ChildGuard],
//     children: [
//       {path: 'fchild-component', component: FchildComponent},
//     ],
//   },

//  {path:'favorite',component:TemplateDrivenComponent},
//  {path:'form',component:ReactiveFormComponent},
//   {path:"yourpath",component:YourGuardComponent ,canActivate:[YourGuardGuard]},
//   {path:"candeact",component:DeactivatesComponent,canDeactivate:[CanDeactGuard]},
//   {path:"second-component/:id", component:SecondcomponentComponent},
// {path:"home",component: HomeComponent},
//   {path:"Rperm",component:RoutingPerameterComponent,
// },
//   {path:"Rperms/:id",component:RparmComponent},
//   {path:"",redirectTo:"/first-component",pathMatch:"full"},
//   { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule),canLoad:[CanLoadGuard]},
//   { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)},
//    {path:'**', component:PagenotfoundComponent},
{path:'table',component: TableComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
