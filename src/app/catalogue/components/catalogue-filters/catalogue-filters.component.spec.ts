import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueFiltersComponent } from './catalogue-filters.component';

describe('CatalogueFiltersComponent', () => {
  let component: CatalogueFiltersComponent;
  let fixture: ComponentFixture<CatalogueFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogueFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogueFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
