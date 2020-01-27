import { async, TestBed } from '@angular/core/testing';
import { UiAdminModule } from './ui-admin.module';

describe('UiAdminModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiAdminModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiAdminModule).toBeDefined();
  });
});
