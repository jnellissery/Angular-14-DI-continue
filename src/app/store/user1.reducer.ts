import { createReducer, on } from '@ngrx/store';
import { cloneDeep } from 'lodash-es';

import { IUsers } from '../usermodel';
import {
  getUsersSuccessMsg,
  addUserSuccessMsg,
  addUserErrorMsg,
  selecteUserSuccessMsg,
  deleteUserSuccessMsg,
  deleteUserErrorMsg,
  updateUserSuccessMsg,
} from './user.action';

export interface UsersState {
  allUsers: IUsers[];
  selecteduser: IUsers;
}
export const initialState: UsersState = {
  allUsers: [{ id: 0, UserId: 0, title: '', body: '' }],
  selecteduser: { id: 0, UserId: 0, title: '', body: '' },
};

export const usersReducer = createReducer(
  initialState,
  on(updateUserSuccessMsg, (state, { user }) => {
    const tempusers: IUsers[] = cloneDeep(state.allUsers);
    const index = tempusers.findIndex((x) => x.id == user.id);
    tempusers.splice(index, 1, user);
    return {
      ...state,
      allUsers: tempusers,
    };
  })
);
