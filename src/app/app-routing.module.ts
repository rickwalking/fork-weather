import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialComponent } from '@initial/components/initial/initial.component';
import { SharedModule } from '@shared/shared.module';
import { WeatherModule } from '@weather/weather.module';

const routes: Routes = [
    {
        path: '',
        component: InitialComponent,
        pathMatch: 'full',
    },
    {
        path: 'weather',
        loadChildren: (): Promise<WeatherModule> =>
            import('@weather/weather.module').then(
                (module): typeof WeatherModule => module.WeatherModule,
            ),
        canLoad: [],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
