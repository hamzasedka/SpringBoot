import { OverlayRef } from '@angular/cdk/overlay';
import { TemplateRef, Type } from '@angular/core';
import { Subject } from 'rxjs';

export interface PopoverCloseEvent<T = any> {
  type: 'backdropClick' | 'close';
  data: T;
}

export type PopoverContent = TemplateRef<any> | Type<any> | string;

/**
 * See {@link https://netbasal.com/creating-powerful-components-with-angular-cdk-2cef53d81cea}
 */
export class PopoverRef<T = any> {
  readonly afterClosed = new Subject<PopoverCloseEvent<T>>();
  afterClosed$ = this.afterClosed.asObservable();

  constructor(
    public overlay: OverlayRef,
    public content: PopoverContent,
    public data: T
  ) {
    overlay.backdropClick().subscribe(() => {
      this._close('backdropClick', undefined);
    });
  }

  close(data?: T): void {
    this._close('close', data);
  }

  private _close(type: PopoverCloseEvent['type'], data?: T): void {
    this.overlay.dispose();
    this.afterClosed.next({
      type,
      data
    });
    this.afterClosed.complete();
  }
}
