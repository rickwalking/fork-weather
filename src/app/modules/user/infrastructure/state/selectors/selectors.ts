import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUser } from '@user/domain/interfaces/user.interface';

export const selectUser = createFeatureSelector<IUser>('user');

export const selectHasUser = createSelector(selectUser, (user: IUser) => {
    return Object.keys(user).length > 0;
});
