import { Injectable } from '@angular/core';
import { CanLoad, Router, UrlTree } from '@angular/router';
import { UserFacade } from '@user/infrastructure/state/facade/user.facade';
import { map, Observable, take } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanLoad {
    constructor(private userFacade: UserFacade, private router: Router) {}

    canLoad(): Observable<boolean | UrlTree> {
        return this.userFacade.hasUserPersisted$.pipe(
            map((hasUser: boolean): boolean | UrlTree => {
                return hasUser ? true : this.router.parseUrl('/');
            }),
            take(1),
        );
    }
}
