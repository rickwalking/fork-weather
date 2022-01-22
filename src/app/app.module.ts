import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InitialModule } from '@initial/initial.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, InitialModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
