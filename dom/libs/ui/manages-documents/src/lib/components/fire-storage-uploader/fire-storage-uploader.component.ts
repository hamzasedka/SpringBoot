import { Component, forwardRef, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageDocument } from '@dom/common/dto';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AppEntityServices } from '@dom/data/ngrx-data';


@Component({
  selector: 'dom-fire-storage-uploader',
  templateUrl: './fire-storage-uploader.component.html',
  styleUrls: ['./fire-storage-uploader.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FireStorageUploaderComponent),
      multi: true
    }
  ]
})
export class FireStorageUploaderComponent implements ControlValueAccessor {

  @Input() label:string;
  private files = new BehaviorSubject<StorageDocument[]>([]);
  files$ = this.files.asObservable();

  disabled: boolean;

  propagateChange = (_: any) => { };

  constructor(private readonly appEntityServices: AppEntityServices) { }

  onFilesDroppped(files: File[]) {
    this.files.next(files.map(f => ({ name: f?.name, file: f, url: '' })));
  }

  // implements ControlValueAccessor
  writeValue(docIds: string[] | string): void {
    const listIds = Array.isArray(docIds) ? docIds : [docIds];
    if (docIds && docIds.length > 0) {
      Promise.all(listIds.map(docId => this.appEntityServices.storageDocumentsCollectionService.getByKey(docId).toPromise())).then(
        files => {
          this.files.next(files);
        }
      );
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // internal changes
  onFileRemoved(file: StorageDocument) {
    console.log('onFileRemoved => ', file);
    const files = this.files.value.filter(f => f?.uid !== file?.uid);
    this.propagateChange(files.map(d => d?.uid));
    this.files.next(files);
  }

  async onFileUploaded(storageDocument: StorageDocument, files: StorageDocument[]) {
    try {
      this.propagateChange([...files.map(f=> f.uid), storageDocument?.uid]);
    } catch (error) {
      console.error(error);
    }
  }
}
