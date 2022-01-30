import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InitialModule } from '@initial/initial.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '@shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { userReducer } from 'src/app/modules/user/infrastructure/state/reducer/reducer';

export function debug(reducer: any) {
    return function (state: any, action: any) {
        console.log('state', state);
        console.log('action', action);

        return reducer(state, action);
    };
}

export const metaReducers = [debug];

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        InitialModule,
        BrowserAnimationsModule,
        SharedModule,
        StoreModule.forRoot({ user: userReducer }, { metaReducers }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
