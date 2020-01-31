import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAddressesComponent } from './edit-addresses.component';

describe('EditAddressesComponent', () => {
  let component: EditAddressesComponent;
  let fixture: ComponentFixture<EditAddressesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAddressesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAddressesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
