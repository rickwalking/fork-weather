import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from '@weather/weather.routing.module';
import { MaterialModule } from '@shared/material/material.module';
import { WeatherComponent } from '@weather/components/weather/weather.component';
import { SharedModule } from '@shared/shared.module';
import { DetailsComponent } from '@weather/components/details/details.component';
import { StoreModule } from '@ngrx/store';
import { forecastReducer } from '@weather/infrastructure/state/reducer/reducer';
import { ShowWarningWithName } from '@weather/infrastructure/pipes/show-warning-with-name.pipe';
import { ShowForecastCity } from '@weather/infrastructure/pipes/show-forecast-city.pipe';
import { ShowForecastTemperature } from '@weather/infrastructure/pipes/show-forecast-temperature';
import { ShowForecastFeelsLike } from '@weather/infrastructure/pipes/show-forecast-feels-like';
import { NoForecastComponent } from '@weather/components/no-forecast/no-forecast.component';

@NgModule({
    declarations: [
        WeatherComponent,
        NoForecastComponent,
        DetailsComponent,
        ShowWarningWithName,
        ShowForecastCity,
        ShowForecastTemperature,
        ShowForecastFeelsLike,
    ],
    imports: [
        CommonModule,
        WeatherRoutingModule,
        MaterialModule,
        SharedModule,
        StoreModule.forFeature('forecast', forecastReducer),
    ],
})
export class WeatherModule {}
