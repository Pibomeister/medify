import { DrugService } from '../../../core/services/drug.service';
import 'rxjs/add/operator/switchMap';
import { IDrug } from '../../../../shared/models/drug';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-catalogue',
  templateUrl: './sub-catalogue.component.html',
  styleUrls: ['./sub-catalogue.component.css']
})
export class SubCatalogueComponent implements OnInit {

  private routeSub: Subscription;
  public category: string;
  public drugs$: Observable<IDrug[]>;

  constructor(private activatedRoute: ActivatedRoute,
              private drugService: DrugService) { }

  ngOnInit() {
    this.drugs$ = this.activatedRoute.params
      .switchMap(params => {
        this.category = params['category']; 
        return this.drugService.getDrugsByCategory(this.category)
      });

  }



}
