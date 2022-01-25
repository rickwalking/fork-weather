import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from '@weather/weather.routing.module';
import { MaterialModule } from '@shared/material/material.module';
import { WeatherComponent } from '@weather/components/weather/weather.component';

@NgModule({
    declarations: [WeatherComponent],
    imports: [CommonModule, WeatherRoutingModule, MaterialModule],
})
export class WeatherModule {}
