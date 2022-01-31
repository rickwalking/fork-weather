import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { IForecast } from '@weather/domain/interfaces/forecast.interface';

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsComponent {
    @Input() public forecast: IForecast | null = {
        name: '',
        main: {
            feels_like: 0,
            pressure: 0,
            temp: 0,
            temp_max: 0,
            temp_min: 0,
        },
    };

    public getDate(): number {
        return Date.now();
    }
}
