import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MeteoService } from './meteo.service';
import { HttpModule } from '@angular/http';
import { BaseComponent } from './base/base.component';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [MeteoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
