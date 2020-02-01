import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'dom-fire-storage-uploader',
  templateUrl: './fire-storage-uploader.component.html',
  styleUrls: ['./fire-storage-uploader.component.scss']
})
export class FireStorageUploaderComponent {
  private files = new BehaviorSubject<File[]>([]);
  files$ = this.files.asObservable();

  onFilesDroppped(files: File[]) {
    this.files.next(files);
  }

  onFileRemoved(file: File) {
    const files = this.files.value.filter(f => f !== file);
    this.files.next(files);
  }
}
