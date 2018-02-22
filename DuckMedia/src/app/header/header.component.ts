import { Component } from '@angular/core';

import { EnvVars } from '../services/envvars.service';
import { Weather } from '../services/weather.service';

import { WeatherEntity } from '../entities/weather/weather.entity';

@Component({
	selector: 'site-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  private location: string = '';
  private header_logo: string = '';
  private currentDate: string = '';

  private weatherTemperature: number = 0;
  private weatherIcon: string = '';

  constructor(envVars: EnvVars, weather: Weather) {
    this.location = envVars.getLocation();
    this.header_logo = envVars.LOGO_IMAGE;
    this.currentDate = this.getCurrentDate();

    weather.getWeather(envVars.LOCATION_COORDS[0], envVars.LOCATION_COORDS[1]).subscribe(data => {
      this.weatherTemperature = Math.round(data['main']['temp'] - 273.15);
      this.weatherIcon = data['weather'][0]['icon'];
      this.weatherIcon = this.weatherIcon.substr(0, this.weatherIcon.length - 1);
      this.weatherIcon = 'assets/img/weather/' + this.weatherIcon + '.png';
    });
  }

  private getCurrentDate(): string {
    var date = new Date(),
        weekDay: number = date.getDay() - 1,
        day: number = date.getDate(),
        month: number = date.getMonth(),
        year: number = date.getFullYear(),

        weekDayList: string[] = ['Lunes', 'Martes', 'Miércoles',
                                  'Jueves', 'Viernes', 'Sabado',
                                  'Domingo'],
        monthList: string[] = ['enero', 'febrero', 'marzo', 'abril',
                                'mayo', 'junio', 'julio', 'agosto',
                                'septiembre', 'octubre', 'noviembre',
                                'diciembre'];

    return weekDayList[weekDay] + ', ' + day + ' de ' + monthList[month] + ' del ' + year;
  }
}