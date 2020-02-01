import { async, TestBed } from '@angular/core/testing';
import { UiManagesDocumentsModule } from './ui-manages-documents.module';

describe('UiManagesDocumentsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UiManagesDocumentsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(UiManagesDocumentsModule).toBeDefined();
  });
});
