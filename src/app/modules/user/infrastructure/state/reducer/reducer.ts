import { createReducer, on } from '@ngrx/store';
import { IUserEntity } from '@user/domain/interfaces/user-entity.interface';
import { addUser, removeUser } from '@user/infrastructure/state/actions/actions';

export const initialState: Partial<IUserEntity> = {};

export const userReducer = createReducer(
    initialState,
    on(addUser, (state, { user: { id, name } }) => {
        return {
            ...state,
            user: {
                id: id,
                name: name,
            },
        };
    }),
    on(removeUser, () => {
        return {};
    }),
);
