import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IForecastEntity } from '@weather/domain/interfaces/forecast-entity';
import { IForecast } from '@weather/domain/interfaces/forecast.interface';

export const selectFeature = createFeatureSelector<IForecastEntity>('forecast');

export const selectCurrentForecast = createSelector(
    selectFeature,
    (data: IForecastEntity): IForecast => data.forecast,
);

export const selectHasForecast = createSelector(
    selectFeature,
    (forecast: IForecastEntity): boolean => {
        return Object.keys(forecast).length > 0;
    },
);
