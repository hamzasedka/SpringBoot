import { async, TestBed } from '@angular/core/testing';
import { UiPublicModule } from './ui-public.module';

describe('UiPublicModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiPublicModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiPublicModule).toBeDefined();
  });
});
