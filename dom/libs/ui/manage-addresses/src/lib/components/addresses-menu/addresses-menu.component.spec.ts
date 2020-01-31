import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressesMenuComponent } from './addresses-menu.component';

describe('AddressesMenuComponent', () => {
  let component: AddressesMenuComponent;
  let fixture: ComponentFixture<AddressesMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressesMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
