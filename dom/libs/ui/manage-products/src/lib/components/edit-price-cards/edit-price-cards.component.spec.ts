import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPriceCardsComponent } from './edit-price-cards.component';

describe('EditPriceCardsComponent', () => {
  let component: EditPriceCardsComponent;
  let fixture: ComponentFixture<EditPriceCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPriceCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPriceCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
