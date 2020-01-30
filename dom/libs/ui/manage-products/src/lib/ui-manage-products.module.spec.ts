import { async, TestBed } from '@angular/core/testing';
import { UiManageProductsModule } from './ui-manage-products.module';

describe('UiManageProductsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiManageProductsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiManageProductsModule).toBeDefined();
  });
});
