import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { UserFacade } from '@user/infrastructure/state/facade/user.facade';
import { map, Observable, take } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class InitialGuard implements CanActivate {
    constructor(private userFacade: UserFacade, private router: Router) {}

    canActivate(): Observable<boolean | UrlTree> {
        return this.userFacade.hasUserPersisted$.pipe(
            map((hasUser: boolean): boolean | UrlTree => {
                return hasUser ? this.router.parseUrl('/weather') : true;
            }),
            take(1),
        );
    }
}
