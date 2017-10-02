import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugCardSmallComponent } from './drug-card-small.component';

describe('DrugCardSmallComponent', () => {
  let component: DrugCardSmallComponent;
  let fixture: ComponentFixture<DrugCardSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrugCardSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugCardSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
