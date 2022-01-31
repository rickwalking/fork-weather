import { HttpClient } from '@angular/common/http';
import { Injectable, OnDestroy } from '@angular/core';
import { IForecast } from '@weather/domain/interfaces/forecast.interface';
import { IGeolocation } from '@weather/domain/interfaces/geolocation.interface';
import { ForecastFacade } from '@weather/infrastructure/state/facade/forecast.facade';
import { Subscription } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class WeatherService implements OnDestroy {
    private subscriptions: Subscription = new Subscription();
    private readonly API_KEY: string = '';

    constructor(private httpClient: HttpClient, private forecastFacade: ForecastFacade) {}

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    getWeather(geolocation: IGeolocation): void {
        this.subscriptions.add(
            this.httpClient
                .get<IForecast>(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${geolocation.latitude}&lon=${geolocation.longitude}&units=metric&appid=${this.API_KEY}`,
                )
                .subscribe({
                    next: (value: IForecast): void => {
                        this.forecastFacade.addForecast(value);
                    },
                }),
        );
    }
}
