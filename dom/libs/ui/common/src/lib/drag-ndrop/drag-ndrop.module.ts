import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropzoneDirective } from './directives';
import { UploaderComponent } from './uploader/uploader.component';



@NgModule({
  declarations: [DropzoneDirective, UploaderComponent],
  imports: [
    CommonModule
  ],
  exports: [DropzoneDirective, UploaderComponent]
})
export class DragNDropModule { }
