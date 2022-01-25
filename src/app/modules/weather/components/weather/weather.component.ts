import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'app-weather',
    templateUrl: './weather.component.html',
    styleUrls: ['./weather.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherComponent {}
