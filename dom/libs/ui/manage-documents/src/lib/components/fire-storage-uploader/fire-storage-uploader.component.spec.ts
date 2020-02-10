import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FireStorageUploaderComponent } from './fire-storage-uploader.component';

describe('FireStorageUploaderComponent', () => {
  let component: FireStorageUploaderComponent;
  let fixture: ComponentFixture<FireStorageUploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FireStorageUploaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FireStorageUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
