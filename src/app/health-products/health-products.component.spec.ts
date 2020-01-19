import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthProductsComponent } from './health-products.component';

describe('HealthProductsComponent', () => {
  let component: HealthProductsComponent;
  let fixture: ComponentFixture<HealthProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
