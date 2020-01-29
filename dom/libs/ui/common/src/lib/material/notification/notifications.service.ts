import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

export enum NotificationLevel {
  Default = 'default',
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
  Error = 'error'
}

@Injectable()
export class NotificationService {
  private static readonly DEFAULT_DURATION = 5000;

  constructor(private readonly snackBar: MatSnackBar, private readonly zone: NgZone) {}

  default(message: string, duration = NotificationService.DEFAULT_DURATION, isHandset?: boolean): void {
    this.show(message, NotificationLevel.Default, duration, isHandset);
  }

  info(message: string, duration = NotificationService.DEFAULT_DURATION, isHandset?: boolean): void {
    this.show(message, NotificationLevel.Info, duration, isHandset);
  }

  success(message: string, duration = NotificationService.DEFAULT_DURATION, isHandset?: boolean): void {
    this.show(message, NotificationLevel.Success, duration, isHandset);
  }

  warn(message: string, duration = NotificationService.DEFAULT_DURATION, isHandset?: boolean): void {
    this.show(message, NotificationLevel.Warning, duration, isHandset);
  }

  error(message: string, duration = NotificationService.DEFAULT_DURATION, isHandset?: boolean): void {
    this.show(message, NotificationLevel.Error, duration, isHandset);
  }

  private show(message: string, level: NotificationLevel, duration: number, isHandset?: boolean): void {
    const configuration: MatSnackBarConfig = {
      duration,
      panelClass: `${level}-notification`
    };

    // If desktop, move it to top-right
    if (!isHandset) {
      configuration.horizontalPosition = 'center';
      configuration.verticalPosition = 'bottom';
    }

    // Need to open snackBar from Angular zone to prevent issues with its position per
    // https://stackoverflow.com/questions/50101912/snackbar-position-wrong-when-use-errorhandler-in-angular-5-and-material
    this.zone.run(() => this.snackBar.open(message, undefined, configuration));
  }
}
