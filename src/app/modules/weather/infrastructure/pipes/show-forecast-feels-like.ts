import { Pipe, PipeTransform } from '@angular/core';
import { IForecast } from '@weather/domain/interfaces/forecast.interface';

@Pipe({
    name: 'showForecastFeelsLike',
})
export class ShowForecastFeelsLike implements PipeTransform {
    transform(forecast: IForecast | null): string {
        if (forecast === null) {
            return '';
        }

        return `${Math.round(forecast.main.feels_like)} C`;
    }
}
