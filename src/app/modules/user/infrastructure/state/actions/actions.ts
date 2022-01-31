import { createAction, props } from '@ngrx/store';
import { IUser } from '@user/domain/interfaces/user.interface';

export const addUser = createAction('[User] Add New User', props<{ user: IUser }>());
export const removeUser = createAction('[User] Remove User');
