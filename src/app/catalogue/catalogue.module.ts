import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { CatalogueComponent } from './containers/catalogue/catalogue.component';
import { DrugDetailComponent } from './containers/drug-detail/drug-detail.component';
import { CatalogueSidebarComponent } from './components/catalogue-sidebar/catalogue-sidebar.component';
import { CatalogueFiltersComponent } from './components/catalogue-filters/catalogue-filters.component';
import { SubCatalogueComponent } from './containers/sub-catalogue/sub-catalogue.component';
import { CategoryGridComponent } from './components/category-grid/category-grid.component';

@NgModule({
  imports: [
    CommonModule,
    CatalogueRoutingModule
  ],
  declarations: [
    CatalogueComponent,
    DrugDetailComponent,
    CatalogueSidebarComponent,
    CatalogueFiltersComponent,
    SubCatalogueComponent,
    CategoryGridComponent
  ]
})
export class CatalogueModule { }
