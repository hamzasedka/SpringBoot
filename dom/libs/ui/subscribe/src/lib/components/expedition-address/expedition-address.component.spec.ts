import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpeditionAddressComponent } from './expedition-address.component';

describe('ExpeditionAddressComponent', () => {
  let component: ExpeditionAddressComponent;
  let fixture: ComponentFixture<ExpeditionAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpeditionAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpeditionAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
