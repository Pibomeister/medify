import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './containers/cart/cart.component';
import { OrderOverviewComponent } from './containers/order-overview/order-overview.component';
import { PaymentComponent } from './containers/payment/payment.component';
import { OrderConfirmComponent } from './containers/order-confirm/order-confirm.component';
import { OrderFinishedComponent } from './containers/order-finished/order-finished.component';

@NgModule({
  imports: [
    CommonModule,
    CartRoutingModule
  ],
  declarations: [CartComponent, OrderOverviewComponent, PaymentComponent, OrderConfirmComponent, OrderFinishedComponent]
})
export class CartModule { }
