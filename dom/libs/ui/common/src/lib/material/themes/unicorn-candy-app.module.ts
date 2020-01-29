import {OverlayContainer, OverlayModule} from '@angular/cdk/overlay';
import { NgModule } from '@angular/core';

@NgModule({
  imports:[OverlayModule]
})
export class UnicornCandyAppModule {
  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add('unicorn-dark-theme');
  }
}
