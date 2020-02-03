import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { StorageDocument } from '@dom/common/dto';
import { AppEntityServices } from '@dom/data/ngrx-data';

@Component({
  selector: 'dom-upload-task',
  templateUrl: './upload-task.component.html',
  styleUrls: ['./upload-task.component.scss']
})
export class UploadTaskComponent implements OnInit {

  @Input() parentDirectory = 'docs';
  @Input() disabled: boolean;
  @Input() file: StorageDocument;
  @Output() fileRemoved = new EventEmitter<StorageDocument>();
  @Output() fileUploaded = new EventEmitter<StorageDocument>();

  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: string;

  constructor(private storage: AngularFireStorage, private readonly appEntityServices: AppEntityServices) { }

  ngOnInit() {
    if ((this.file as any).file) {
      this.startUpload();
    } else {
      this.downloadURL = this.file?.url;
    }
  }

  startUpload() {
    // The storage path
    const path = `${this.parentDirectory}/${Date.now()}_${this.file.name}`;
    // Reference to storage bucket
    const ref = this.storage.ref(path);
    // The main task
    this.task = this.storage.upload(path, (this.file as any).file);
    // Progress monitoring
    this.percentage = this.task.percentageChanges();

    this.snapshot = this.task.snapshotChanges().pipe(
      tap(console.log),
      finalize(async () => {
        this.downloadURL = await ref.getDownloadURL().toPromise();
        const metadata = await ref.getMetadata().toPromise();
        const newDoc = {
          name: metadata.name,
          url: this.downloadURL,
          created_time: Date.now()
        };
        const insertedDocument = await this.appEntityServices.storageDocumentsCollectionService.add(newDoc).toPromise();
        this.file.uid = insertedDocument.uid;
        this.file.url = insertedDocument.url;
        this.fileUploaded.emit(insertedDocument);
      }),
    );
  }

  async deleteDoc(event) {
    event.stopPropagation();
    this.fileRemoved.emit(this.file);
    if (!!this.downloadURL) {
      try {
        await this.storage.storage.refFromURL(this.downloadURL).delete();
      } catch (error) {
        console.log('error : ', error);
      }
    }
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes;
  }
}
