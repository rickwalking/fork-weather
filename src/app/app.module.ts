import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InitialModule } from '@initial/initial.module';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from '@shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { userReducer } from 'src/app/modules/user/infrastructure/state/reducer/reducer';
import { metaReducers } from '@shared/infrastructure/state/meta.reducer';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        InitialModule,
        BrowserAnimationsModule,
        SharedModule,
        HttpClientModule,
        StoreModule.forRoot({ user: userReducer }, { metaReducers }),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
