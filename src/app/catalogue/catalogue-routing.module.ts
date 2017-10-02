import { DrugDetailComponent } from './containers/drug-detail/drug-detail.component';
import { SubCatalogueComponent } from './containers/sub-catalogue/sub-catalogue.component';
import { CatalogueComponent } from './containers/catalogue/catalogue.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: CatalogueComponent },
  { path: 'catalogue/:category', component: SubCatalogueComponent },
  { path: 'product/:product_id', component: DrugDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogueRoutingModule { }
