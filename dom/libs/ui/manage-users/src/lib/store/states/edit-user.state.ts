import { UserAccount } from '@dom/common/dto';

export interface EditUserState {
  user: UserAccount;
}


export const EDIT_USER_INITIAL_STATE: EditUserState = {
  user: {
    email: ''
  }
};
