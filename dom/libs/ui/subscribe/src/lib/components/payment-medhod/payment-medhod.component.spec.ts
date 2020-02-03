import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMedhodComponent } from './payment-medhod.component';

describe('PaymentMedhodComponent', () => {
  let component: PaymentMedhodComponent;
  let fixture: ComponentFixture<PaymentMedhodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentMedhodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentMedhodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
