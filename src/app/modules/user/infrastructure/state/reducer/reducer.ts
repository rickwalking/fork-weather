import { createReducer, on } from '@ngrx/store';
import { IUser } from '@user/domain/interfaces/user.interface';
import { addUser } from '@user/infrastructure/state/actions/actions';

export const initialState: Partial<IUser> = {};

export const userReducer = createReducer(
    initialState,
    on(addUser, (state, { user }) => {
        return { ...state, user };
    }),
);
