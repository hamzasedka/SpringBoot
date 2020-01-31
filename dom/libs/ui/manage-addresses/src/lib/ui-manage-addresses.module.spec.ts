import { async, TestBed } from '@angular/core/testing';
import { UiManageAddressesModule } from './ui-manage-addresses.module';

describe('UiManageAddressesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiManageAddressesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiManageAddressesModule).toBeDefined();
  });
});
