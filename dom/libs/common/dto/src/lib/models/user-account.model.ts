import { UserRoles } from '../enums';
import { IdentityEntity } from './identity-entity';

export interface UserAccount  extends IdentityEntity{
  uid?: string;
  email?: string;
  firstname?: string;
  lastname?: string;
  displayName?: string;
  phoneNumber?: string;
  password?: string;
  confirmPassword?: string;
  photoURL?: string;
  emailVerified?: boolean;
  roles?: UserRoles | string[];
  disabled?: boolean;
  created_time?: Date;
  update_time?: Date;
}
