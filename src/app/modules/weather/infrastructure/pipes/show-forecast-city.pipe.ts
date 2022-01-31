import { Pipe, PipeTransform } from '@angular/core';
import { IForecast } from '@weather/domain/interfaces/forecast.interface';

@Pipe({
    name: 'showForecastCity',
})
export class ShowForecastCity implements PipeTransform {
    transform(forecast: IForecast | null): string {
        if (forecast === null) {
            return '';
        }

        return `Temperatura em ${forecast.name}`;
    }
}
