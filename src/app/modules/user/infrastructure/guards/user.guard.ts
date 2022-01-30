import { Injectable } from '@angular/core';
import { Router, CanLoad } from '@angular/router';

import { UserFacade } from '@user/infrastructure/state/facade/user.facade';

import { concatMap, Observable, of, switchMap } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class UserGuard implements CanLoad {
    constructor(private router: Router, private userFacade: UserFacade) {}

    canLoad(): Observable<boolean> {
        return this.userFacade.hasUserPersisted$.pipe(
            switchMap((hasUserPersisted: boolean): Observable<boolean> => {
                console.log(hasUserPersisted);
                if (!hasUserPersisted) {
                    this.router.navigate(['/']);
                    return of(false);
                }

                return of(true);
            }),
        );
    }
}
