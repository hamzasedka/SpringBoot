import { async, TestBed } from '@angular/core/testing';
import { CommonHelpersModule } from './common-helpers.module';

describe('CommonHelpersModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonHelpersModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonHelpersModule).toBeDefined();
  });
});
