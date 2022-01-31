import { createAction, props } from '@ngrx/store';
import { IForecast } from '@weather/domain/interfaces/forecast.interface';

export const addForecast = createAction(
    '[Forecast] Add New Forecast',
    props<{ forecast: IForecast }>(),
);

export const removeForecast = createAction('[Forecast] Remove');
