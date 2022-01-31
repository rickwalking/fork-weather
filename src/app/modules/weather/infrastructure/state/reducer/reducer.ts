import { createReducer, on } from '@ngrx/store';
import { IForecastEntity } from '@weather/domain/interfaces/forecast-entity';
import { addForecast, removeForecast } from '@weather/infrastructure/state/actions/actions';

export const initialState: Partial<IForecastEntity> = {};

export const forecastReducer = createReducer(
    initialState,
    on(addForecast, (state, { forecast }) => {
        return {
            ...state,
            forecast,
        };
    }),
    on(removeForecast, () => {
        return {};
    }),
);
