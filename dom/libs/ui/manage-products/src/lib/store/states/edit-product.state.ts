import * as Models from '@dom/common/dto';

export interface EditProductState {
  product: Models.Product;
}


export const EDIT_USER_INITIAL_STATE: EditProductState = {
  product: undefined
};
