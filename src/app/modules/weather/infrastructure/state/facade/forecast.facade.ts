import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { IForecast } from '@weather/domain/interfaces/forecast.interface';
import { addForecast, removeForecast } from '@weather/infrastructure/state/actions/actions';
import {
    selectCurrentForecast,
    selectHasForecast,
} from '@weather/infrastructure/state/selectors/selectors';

import { Observable, share } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ForecastFacade {
    private forecast$: Observable<IForecast>;
    private hasForecast$: Observable<boolean>;

    constructor(private store: Store) {
        this.forecast$ = this.store.pipe(select(selectCurrentForecast));
        this.hasForecast$ = this.store.pipe(select(selectHasForecast));
    }

    public addForecast(forecast: IForecast): void {
        this.store.dispatch(
            addForecast({
                forecast,
            }),
        );
    }

    public removeForecast(): void {
        this.store.dispatch(removeForecast());
    }

    public get currentForecast$(): Observable<IForecast> {
        return this.forecast$.pipe(share());
    }

    public get hasForecastPersisted$(): Observable<boolean> {
        return this.hasForecast$.pipe(share());
    }
}
