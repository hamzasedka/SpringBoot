import { async, TestBed } from '@angular/core/testing';
import { DataNgrxStoreModule } from './data-ngrx-store.module';

describe('DataNgrxStoreModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DataNgrxStoreModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DataNgrxStoreModule).toBeDefined();
  });
});
