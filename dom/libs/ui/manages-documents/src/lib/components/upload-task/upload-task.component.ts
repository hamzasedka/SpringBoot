import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

export interface FileUploaded {
  name: string;
  url: string;
}

@Component({
  selector: 'dom-upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.scss']
})
export class UploadTaskComponent implements OnInit {

  @Input() parentDirectory = 'docs';
  @Input() file: File;
  @Output() fileRemoved = new EventEmitter<File>();
  @Output() fileUploaded = new EventEmitter<FileUploaded>();

  task: AngularFireUploadTask;

  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL;

  constructor(private storage: AngularFireStorage) { }

  ngOnInit() {
    this.startUpload();
  }

  startUpload() {
    // The storage path
    const path = `${this.parentDirectory}/${Date.now()}_${this.file.name}`;
    // Reference to storage bucket
    const ref = this.storage.ref(path);
    // The main task
    this.task = this.storage.upload(path, this.file);
    // Progress monitoring
    this.percentage = this.task.percentageChanges();

    this.snapshot = this.task.snapshotChanges().pipe(
      tap(console.log),
      // The file's download URL
      finalize(async () => {
        this.downloadURL = await ref.getDownloadURL().toPromise();
        const metadata = await ref.getMetadata().toPromise();
        this.fileUploaded.emit({
          name: metadata.name as string,
          url: this.downloadURL
        });
      }),
    );
  }

  async delete(event) {
    console.log('event: ', event);
    event.stopPropagation();
    if (!!this.downloadURL) {
      try {
        console.log('remove : ', this.downloadURL);
        this.storage.storage.refFromURL(this.downloadURL).delete();
        this.fileRemoved.emit(this.file);
      } catch (error) {
        console.log('error : ', error);
      }
    }
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }
}
