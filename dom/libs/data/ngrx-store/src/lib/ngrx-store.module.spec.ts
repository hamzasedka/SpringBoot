import { async, TestBed } from '@angular/core/testing';
import { NgrxStoreModule } from './ngrx-store.module';

describe('NgrxStoreModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgrxStoreModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(NgrxStoreModule).toBeDefined();
  });
});
