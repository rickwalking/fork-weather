import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IShowUserDTO } from '@user/dto/show-user.interface';

@Component({
    selector: 'app-no-forecast',
    templateUrl: './no-forecast.component.html',
    styleUrls: ['./no-forecast.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NoForecastComponent {
    @Input() user: IShowUserDTO | null = {
        name: '',
        id: '',
    };
}
