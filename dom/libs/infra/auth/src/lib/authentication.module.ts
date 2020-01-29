import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AuthService } from './email-pwd-auth.service';
import { AuthGuard } from './auth.guard';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';

@NgModule({
  imports: [CommonModule, AngularFireAuthModule],
  providers: [AuthService, AuthGuard, AngularFireAuthGuard],
  exports: [AngularFireAuthModule],
})
export class AuthenticationModule {}
