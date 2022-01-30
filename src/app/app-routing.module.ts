import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@initial/infrastructure/guards/auth.guard';
import { InitialComponent } from '@initial/components/initial/initial.component';
import { WeatherModule } from '@weather/weather.module';

const routes: Routes = [
    {
        path: '',
        component: InitialComponent,
        pathMatch: 'full',
        canActivate: [],
    },
    {
        path: 'weather',
        loadChildren: (): Promise<WeatherModule> =>
            import('@weather/weather.module').then(
                (module): typeof WeatherModule => module.WeatherModule,
            ),
        canLoad: [AuthGuard],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
