import { async, TestBed } from '@angular/core/testing';
import { InfraPwaModule } from './infra-pwa.module';

describe('InfraPwaModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [InfraPwaModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(InfraPwaModule).toBeDefined();
  });
});
