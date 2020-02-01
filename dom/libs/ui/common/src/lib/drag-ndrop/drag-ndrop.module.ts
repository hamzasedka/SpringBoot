import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropzoneDirective } from './directives';
import { UploaderComponent } from './uploader/uploader.component';
import { AppMaterialDesignModule } from '../material/app-material-design.module';



@NgModule({
  declarations: [DropzoneDirective, UploaderComponent],
  imports: [
    CommonModule,
    AppMaterialDesignModule
  ],
  exports: [DropzoneDirective, UploaderComponent]
})
export class DragNDropModule { }
