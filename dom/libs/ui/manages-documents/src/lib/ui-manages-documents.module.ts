import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragNDropModule } from '@dom/ui/common';
import { AppMaterialDesignModule } from '@dom/ui/common';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { UploadTaskComponent } from './components/upload-task/upload-task.component';
import { FireStorageUploaderComponent } from './components/fire-storage-uploader/fire-storage-uploader.component';

@NgModule({
  imports: [CommonModule, DragNDropModule, AppMaterialDesignModule, AngularFireStorageModule],
  declarations: [UploadTaskComponent, FireStorageUploaderComponent],
  exports: [UploadTaskComponent, FireStorageUploaderComponent]
})
export class UiManagesDocumentsModule {}
