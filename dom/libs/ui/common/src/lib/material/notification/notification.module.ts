import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatSnackBarModule  } from '@angular/material/snack-bar';
import { NotificationService } from './notifications.service';

@NgModule({
  imports: [CommonModule, MatSnackBarModule],
  exports: [MatSnackBarModule],
  providers: [NotificationService]
})
export class NotificationModule {}
