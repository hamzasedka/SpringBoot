import { async, TestBed } from '@angular/core/testing';
import { UiManageOrdersModule } from './ui-manage-orders.module';

describe('UiManageOrdersModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiManageOrdersModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiManageOrdersModule).toBeDefined();
  });
});
