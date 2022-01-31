import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { IShowUserDTO } from '@user/dto/show-user.interface';
import { UserFacade } from '@user/infrastructure/state/facade/user.facade';
import { IForecast } from '@weather/domain/interfaces/forecast.interface';
import { GeolocationService } from '@weather/infrastructure/services/geolocation.service';
import { WeatherManagerService } from '@weather/infrastructure/services/weather-manager.service';
import { ForecastFacade } from '@weather/infrastructure/state/facade/forecast.facade';

import { Observable, of } from 'rxjs';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherComponent implements OnInit {
    public user$: Observable<IShowUserDTO> = of();
    public forecast$: Observable<IForecast> = of();
    public hasForecast$: Observable<boolean> = of();

    constructor(
        private weatherManagerService: WeatherManagerService,
        private gelocationService: GeolocationService,
        private userFacade: UserFacade,
        private forecastFacade: ForecastFacade,
    ) {}

    ngOnInit(): void {
        this.user$ = this.userFacade.currentUser$;
        this.forecast$ = this.forecastFacade.currentForecast$;
        this.hasForecast$ = this.forecastFacade.hasForecastPersisted$;

        this.handleWeatherForecast();
    }

    handleWeatherForecast(): void {
        this.gelocationService.getGeolocation(
            this.weatherManagerService.handleWeatherByGeolocation,
        );
    }
}
