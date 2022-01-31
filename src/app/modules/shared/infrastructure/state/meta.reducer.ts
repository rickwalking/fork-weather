import { Action, ActionReducer, MetaReducer } from '@ngrx/store';
import { IUserEntity } from '@user/domain/interfaces/user-entity.interface';
import { localStorageSync } from 'ngrx-store-localstorage';

export function localStorageSyncReducer(
    reducer: ActionReducer<{ user: Partial<IUserEntity> }, Action>,
): ActionReducer<{ user: Partial<IUserEntity> }, Action> {
    return localStorageSync({
        keys: ['user', 'forecast'],
        rehydrate: true,
    })(reducer);
}

export const metaReducers: Array<MetaReducer<{ user: Partial<IUserEntity> }, Action>> = [
    localStorageSyncReducer,
];
