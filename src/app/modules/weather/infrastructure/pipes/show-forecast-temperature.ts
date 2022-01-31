import { Pipe, PipeTransform } from '@angular/core';
import { IForecast } from '@weather/domain/interfaces/forecast.interface';

@Pipe({
    name: 'showForecastTemperature',
})
export class ShowForecastTemperature implements PipeTransform {
    transform(forecast: IForecast | null): string {
        if (forecast === null) {
            return '';
        }

        return `${Math.round(forecast.main.temp)} C`;
    }
}
