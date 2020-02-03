import { Component , forwardRef } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { StorageDocument } from '@dom/common/dto';
import { ControlValueAccessor , NG_VALUE_ACCESSOR } from '@angular/forms';
import { FileUploaded } from '../../models';
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

  private files = new BehaviorSubject<(File | StorageDocument)[]>([]);
  files$ = this.files.asObservable();
  disabled : boolean;
  propagateChange = (_: any) => {};

  constructor(private readonly appEntityServices: AppEntityServices){}

  onFilesDroppped(files: File[]) {
    this.files.next(files);
  }

  // implements ControlValueAccessor

  writeValue(files: StorageDocument[]): void {
    this.files.next(files);
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
  onFileRemoved(file: File) {
    const files = this.files.value.filter(f => f !== file);
    this.files.next(files);
  }

  async onFileUploaded(file: FileUploaded) {
   const insertedDocument = await  this.appEntityServices.storageDocumentsCollectionService.add(
      {
        name: file.name,
        url: file.url
      }
    ).toPromise();
    this.propagateChange(insertedDocument);
  }
}
