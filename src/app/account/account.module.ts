import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './containers/account/account.component';
import { FavoritesComponent } from './containers/favorites/favorites.component';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule
  ],
  declarations: [AccountComponent, FavoritesComponent]
})
export class AccountModule { }
