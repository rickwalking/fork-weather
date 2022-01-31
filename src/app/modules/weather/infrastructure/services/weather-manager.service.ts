import { Injectable } from '@angular/core';
import { IGeolocation } from '@weather/domain/interfaces/geolocation.interface';
import { WeatherService } from '@weather/infrastructure/services/weather.service';

@Injectable({
    providedIn: 'root',
})
export class WeatherManagerService {
    constructor(private weatherService: WeatherService) {}

    handleWeatherByGeolocation = (position: GeolocationPosition): void => {
        const geolocation: IGeolocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
        };

        this.weatherService.getWeather(geolocation);
    };
}
