import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestInstallPromptComponent } from './suggest-install-prompt.component';

describe('SuggestInstallPromptComponent', () => {
  let component: SuggestInstallPromptComponent;
  let fixture: ComponentFixture<SuggestInstallPromptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestInstallPromptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestInstallPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
