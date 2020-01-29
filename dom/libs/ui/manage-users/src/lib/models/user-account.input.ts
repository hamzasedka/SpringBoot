import { EnumItem } from '@dom/core';

export interface UserAccountInput {
  uid?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  password?: string;
  roles?: EnumItem[];
}
