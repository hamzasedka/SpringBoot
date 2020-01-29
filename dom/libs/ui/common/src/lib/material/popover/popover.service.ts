import {
  ConnectionPositionPair,
  Overlay,
  OverlayConfig,
  PositionStrategy
} from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { Injectable, Injector } from '@angular/core';
import { PopoverContent, PopoverRef } from './popover-ref';
import { PopoverComponent } from './popover.component';
import { PopoverModule } from './popover.module';

export interface PopoverParams<T> {
  width?: string | number;
  height?: string | number;
  origin: HTMLElement;
  content: PopoverContent;
  data?: T;
}

/**
 * See {@link https://netbasal.com/creating-powerful-components-with-angular-cdk-2cef53d81cea}
 */
@Injectable({
  providedIn: PopoverModule
})
export class PopoverService {
  constructor(
    private readonly overlay: Overlay,
    private readonly injector: Injector
  ) {}

  open<T>({
    origin,
    content,
    data,
    width,
    height
  }: PopoverParams<T>): PopoverRef<T> {
    const overlayRef = this.overlay.create(
      this.getOverlayConfig({ origin, width, height })
    );
    const popoverRef = new PopoverRef<T>(overlayRef, content, data);

    const injector = this.createInjector(popoverRef, this.injector);
    overlayRef.attach(
      new ComponentPortal(PopoverComponent, undefined, injector)
    );

    return popoverRef;
  }

  createInjector(popoverRef: PopoverRef, injector: Injector): PortalInjector {
    const tokens = new WeakMap([[PopoverRef, popoverRef]]);
    return new PortalInjector(injector, tokens);
  }

  private getOverlayConfig({ origin, width, height }): OverlayConfig {
    return new OverlayConfig({
      hasBackdrop: true,
      width,
      height,
      backdropClass: 'popover-backdrop',
      positionStrategy: this.getOverlayPosition(origin),
      scrollStrategy: this.overlay.scrollStrategies.reposition()
    });
  }

  private getOverlayPosition(origin: HTMLElement): PositionStrategy {
    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(origin)
      .withPositions(getPositions())
      .withFlexibleDimensions(false)
      .withPush(false);

    return positionStrategy;
  }
}

export function getPositions(): ConnectionPositionPair[] {
  return [
    {
      originX: 'center',
      originY: 'top',
      overlayX: 'center',
      overlayY: 'bottom'
    },
    {
      originX: 'center',
      originY: 'bottom',
      overlayX: 'center',
      overlayY: 'top'
    }
  ];
}
