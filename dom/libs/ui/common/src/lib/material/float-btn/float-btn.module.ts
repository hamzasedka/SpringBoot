import { NgModule } from '@angular/core';
import { FloatBtnComponent } from './float-btn.component';
import { AppMaterialDesignModule } from '../app-material-design.module';



@NgModule({
  declarations: [FloatBtnComponent],
  imports: [AppMaterialDesignModule],
  exports: [FloatBtnComponent]
})
export class FloatBtnModule { }
