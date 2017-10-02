import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrugCardComponent } from './components/drug-card/drug-card.component';
import { DrugCardSmallComponent } from './components/drug-card-small/drug-card-small.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DrugCardComponent, DrugCardSmallComponent]
})
export class SharedModule { }
