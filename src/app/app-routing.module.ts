import { PageNotFoundComponent } from './core/containers/page-not-found/page-not-found.component';
import { MainComponent } from './core/containers/main/main.component';
import { RegisterComponent } from './core/containers/register/register.component';
import { LoginComponent } from './core/containers/login/login.component';
import { WelcomeComponent } from './core/containers/welcome/welcome.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'app', component: MainComponent, children: [
    { path: '', loadChildren: 'app/catalogue/catalogue.module#CatalogueModule' },
    { path: 'account', loadChildren: 'app/account/account.module#AccountModule' },
    { path: 'cart', loadChildren: 'app/cart/cart.module#CartModule' }
  ] },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
