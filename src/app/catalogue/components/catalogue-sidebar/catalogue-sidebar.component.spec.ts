import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogueSidebarComponent } from './catalogue-sidebar.component';

describe('CatalogueSidebarComponent', () => {
  let component: CatalogueSidebarComponent;
  let fixture: ComponentFixture<CatalogueSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogueSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogueSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
