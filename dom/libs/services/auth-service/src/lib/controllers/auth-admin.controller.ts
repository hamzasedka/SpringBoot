import { Controller, Get, Query, Post, Body, Put, Param, Delete, UseGuards, Req } from '@nestjs/common';

import { UserAccount } from '@dom/common/dto';
import * as admin from 'firebase-admin';
import { from, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { AuthGuard } from '../authentication';

@Controller('user')
export class AuthAdminController {
  constructor() { }

  @UseGuards(AuthGuard)
  @Get(':uid')
  findOne(@Param('uid') uid: string): Promise<admin.auth.UserRecord> {
    return admin.auth().getUser(uid);
  }

  @Post()
  createUserAuth(@Body() userAccount: UserAccount): Promise<admin.auth.UserRecord> {
    console.log('createUserAuth : ', userAccount);
    const userRecordPromise = admin.auth().createUser(userAccount);
    return from(userRecordPromise).pipe(
      tap((userRecord) => {
        admin.auth().setCustomUserClaims(userRecord.uid, { roles: userAccount.roles });
      })
    ).toPromise();
  }

  @UseGuards(AuthGuard)
  @Put()
  updateUserAuth(@Body() userAccount: UserAccount): Promise<admin.auth.UserRecord> {
    console.log('received updateUserAuth : ', userAccount);
    const user: any = {};
    if (userAccount.email) {
      user.email = userAccount.email;
    }
    if (userAccount.password) {
      user.password = userAccount.password;
    }
    if (userAccount.firstname && userAccount.lastname) {
      user.displayName = `${userAccount.firstname} ${userAccount.lastname}`;
    }
    if (userAccount.phoneNumber) {
      user.phoneNumber = userAccount.phoneNumber;
    }
    if (userAccount.roles) {
      user.roles = userAccount.roles;
    }
    console.log('user to update  : ', user);
    const userRecordPromise = admin.auth().updateUser(userAccount.uid, user);
    return from(userRecordPromise).pipe(
      tap((userRecord) => {
        admin.auth().setCustomUserClaims(userRecord.uid, { roles: userAccount.roles });
      })
    ).toPromise();
  }
}
