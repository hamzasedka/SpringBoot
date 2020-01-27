import { async, TestBed } from '@angular/core/testing';
import { DataNgrxDataModule } from './data-ngrx-data.module';

describe('DataNgrxDataModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [DataNgrxDataModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(DataNgrxDataModule).toBeDefined();
  });
});
