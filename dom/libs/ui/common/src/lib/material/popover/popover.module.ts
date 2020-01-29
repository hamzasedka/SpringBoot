import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PopoverComponent } from './popover.component';

/**
 * See {@link https://netbasal.com/creating-powerful-components-with-angular-cdk-2cef53d81cea}
 */
@NgModule({
  declarations: [PopoverComponent],
  imports: [CommonModule, OverlayModule],
  exports: [PopoverComponent],
  entryComponents: [PopoverComponent]
})
export class PopoverModule {}
