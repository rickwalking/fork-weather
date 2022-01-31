import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IUser } from '@user/domain/interfaces/user.interface';
import { IShowUserDTO } from '@user/dto/show-user.interface';
import { addUser, removeUser } from '@user/infrastructure/state/actions/actions';
import { selectCurrentUser, selectHasUser } from '@user/infrastructure/state/selectors/selectors';
import { Observable, share } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UserFacade {
    private user$: Observable<IUser>;
    private hasUser$: Observable<boolean>;

    constructor(private store: Store) {
        this.user$ = this.store.pipe(select(selectCurrentUser));
        this.hasUser$ = this.store.pipe(select(selectHasUser));
    }

    public addUser(user: IUser): void {
        this.store.dispatch(
            addUser({
                user,
            }),
        );
    }

    public removeUser(): void {
        this.store.dispatch(removeUser());
    }

    public get currentUser$(): Observable<IShowUserDTO> {
        return this.user$.pipe(share());
    }

    public get hasUserPersisted$(): Observable<boolean> {
        return this.hasUser$.pipe(share());
    }
}
