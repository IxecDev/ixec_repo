import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { Cookie } from './services/angular2-cookies';
import { EnvVars } from './services/envvars.service';
import { Weather } from './services/weather.service';
import { DuckMedia } from './services/duckmedia.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
  	Cookie,
  	EnvVars,
    Weather,
    DuckMedia
  ],
  bootstrap: [AppComponent]
})

export class AppModule {

	constructor(envVars: EnvVars, weather: Weather) {
		envVars.setLocation(Cookie.load('location'));
	}

}