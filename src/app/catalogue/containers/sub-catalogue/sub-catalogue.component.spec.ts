import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCatalogueComponent } from './sub-catalogue.component';

describe('SubCatalogueComponent', () => {
  let component: SubCatalogueComponent;
  let fixture: ComponentFixture<SubCatalogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubCatalogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
