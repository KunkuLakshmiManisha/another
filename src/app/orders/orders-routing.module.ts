import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders.component';

const routes: Routes = [{ path:"", component: OrdersComponent,
children: [{path: 'child', loadChildren: () => import('././child/child.module').then(m => m.ChildModule)}
]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
