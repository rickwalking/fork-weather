import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IUserEntity } from '@user/domain/interfaces/user-entity.interface';
import { IUser } from '@user/domain/interfaces/user.interface';

export const selectUser = createFeatureSelector<IUserEntity>('user');

export const selectCurrentUser = createSelector(
    selectUser,
    (data: IUserEntity): IUser => data.user,
);

export const selectHasUser = createSelector(selectUser, (user: IUserEntity): boolean => {
    return Object.keys(user).length > 0;
});
