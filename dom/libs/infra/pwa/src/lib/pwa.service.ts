import { Injectable, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SwUpdate } from '@angular/service-worker';
import { timer } from 'rxjs';
import { takeUntilDestroyed } from '@dom/common/core';
import { NotificationService } from '@dom/ui/common';
import * as Components from './components';

@Injectable()
export class PwaService implements OnDestroy {
  private static readonly NEW_VERSION_POLL_DELAY = 1000 * 60 * 5; // Every 5 mins

  private beforeInstallPromptEvent: any; // TO_DO: Must be of type BeforeInstallPromptEvent, but not known yet...

  constructor(private readonly serviceWorkerUpdate: SwUpdate, private readonly dialog: MatDialog, private readonly notificationService: NotificationService) { }

  get canInstall(): boolean {
    return this.serviceWorkerUpdate.isEnabled && !!this.beforeInstallPromptEvent && !this.isInstalled;
  }

  get isInstalled(): boolean {
    return window.matchMedia('(display-mode: standalone)').matches;
  }

  get isFullscreen(): boolean {
    return window.matchMedia('(display-mode: fullscreen)').matches;
  }

  ngOnDestroy(): void {
    // takeUntilDestroyed
  }

  activate(): void {
    if (!this.serviceWorkerUpdate.isEnabled) {
      return;
    }
    this.displayNewVersionInstalledMessage(this.notificationService);
    this.pollNewVersionDetection();
    this.updateVersionIfUserAccepts(this.dialog);
    this.installAppIfUserAccepts(this.dialog);
    this.catchBeforeInstallPromptEvent();
  }

  installApplication(): void {
    if (!this.canInstall) {
      return;
    }
    this.beforeInstallPromptEvent.prompt();
  }

  private displayNewVersionInstalledMessage(notificationService: NotificationService): void {
    this.serviceWorkerUpdate.activated.pipe(takeUntilDestroyed(this)).subscribe(() => {
      notificationService.success('New version installed!');
    });
  }

  private pollNewVersionDetection(): void {
    timer(PwaService.NEW_VERSION_POLL_DELAY).pipe(takeUntilDestroyed(this)).subscribe(async () => {
      await this.serviceWorkerUpdate.checkForUpdate();
    });
  }

  private updateVersionIfUserAccepts(dialog: MatDialog): void {
    this.serviceWorkerUpdate.available.pipe(takeUntilDestroyed(this)).subscribe(() => {
      dialog
        .open<Components.UpdatePromptComponent, never, boolean>(
          Components.UpdatePromptComponent
        )
        .afterClosed()
        .pipe(takeUntilDestroyed(this))
        .subscribe(async userWantsToInstallNewVersion => {
          if (userWantsToInstallNewVersion) {
            await this.serviceWorkerUpdate.activateUpdate();
            window.location.reload();
          }
        });
    });
  }

  private installAppIfUserAccepts(dialog: MatDialog): void {
    this.serviceWorkerUpdate.available.pipe(takeUntilDestroyed(this)).subscribe(() => {
      dialog
        .open<Components.SuggestInstallPromptComponent, never, boolean>(
          Components.SuggestInstallPromptComponent
        )
        .afterClosed()
        .pipe(takeUntilDestroyed(this))
        .subscribe(userWantsToInstallNewVersion => {
          if (userWantsToInstallNewVersion) {
            this.installApplication();
          }
        });
    });
  }

  private catchBeforeInstallPromptEvent(): void {
    window.addEventListener('beforeinstallprompt', event => {
      this.beforeInstallPromptEvent = event;
    });
  }
}
