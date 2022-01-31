import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IShowUserDTO } from '@user/dto/show-user.interface';
import { UserFacade } from '@user/infrastructure/state/facade/user.facade';
import { ForecastFacade } from '@weather/infrastructure/state/facade/forecast.facade';
import { Observable, of, share } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
    public hasUser$: Observable<boolean> = of(false);
    public user$: Observable<IShowUserDTO> = of();

    constructor(
        private userFacade: UserFacade,
        private forecastFacade: ForecastFacade,
        private router: Router,
    ) {}

    ngOnInit(): void {
        this.hasUser$ = this.userFacade.hasUserPersisted$;
        this.user$ = this.userFacade.currentUser$.pipe(share());
    }

    logout(): void {
        this.userFacade.removeUser();
        this.forecastFacade.removeForecast();
        this.router.navigate(['/']);
    }
}
