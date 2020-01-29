import { Module } from '@nestjs/common';

import { AuthAdminController } from './controllers';

@Module({
  imports: [],
  controllers: [AuthAdminController]
})
export class AuthModule {}
