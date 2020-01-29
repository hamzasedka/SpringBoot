import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersRibbonComponent } from './users-ribbon.component';

describe('UsersRibbonComponent', () => {
  let component: UsersRibbonComponent;
  let fixture: ComponentFixture<UsersRibbonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersRibbonComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersRibbonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
