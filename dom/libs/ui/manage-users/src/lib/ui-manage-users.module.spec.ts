import { async, TestBed } from '@angular/core/testing';
import { UiManageUsersModule } from './ui-manage-users.module';

describe('UiManageUsersModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiManageUsersModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiManageUsersModule).toBeDefined();
  });
});
