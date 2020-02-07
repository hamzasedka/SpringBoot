import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressesInputComponent } from './addresses-input.component';

describe('AddressesInputComponent', () => {
  let component: AddressesInputComponent;
  let fixture: ComponentFixture<AddressesInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressesInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressesInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
