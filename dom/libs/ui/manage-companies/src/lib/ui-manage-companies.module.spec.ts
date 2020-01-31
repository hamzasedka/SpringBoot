import { async, TestBed } from '@angular/core/testing';
import { UiManageCompaniesModule } from './ui-manage-companies.module';

describe('UiManageCompaniesModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiManageCompaniesModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiManageCompaniesModule).toBeDefined();
  });
});
