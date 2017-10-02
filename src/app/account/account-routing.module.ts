import { FavoritesComponent } from './containers/favorites/favorites.component';
import { AccountComponent } from './containers/account/account.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: AccountComponent },
  { path: 'favorites', component: FavoritesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
