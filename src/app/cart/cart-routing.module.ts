import { OrderFinishedComponent } from './containers/order-finished/order-finished.component';
import { OrderConfirmComponent } from './containers/order-confirm/order-confirm.component';
import { PaymentComponent } from './containers/payment/payment.component';
import { OrderOverviewComponent } from './containers/order-overview/order-overview.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: OrderOverviewComponent },
  { path: 'pay', component: PaymentComponent },
  { path: 'confirm', component: OrderConfirmComponent },
  { path: 'complete', component: OrderFinishedComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
