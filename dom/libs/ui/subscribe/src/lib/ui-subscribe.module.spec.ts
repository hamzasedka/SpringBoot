import { async, TestBed } from '@angular/core/testing';
import { UiSubscribeModule } from './ui-subscribe.module';

describe('UiSubscribeModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiSubscribeModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiSubscribeModule).toBeDefined();
  });
});
