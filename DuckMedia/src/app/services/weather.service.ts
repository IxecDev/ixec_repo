import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Weather {

  private WeatherAPI_URL: string;

  constructor(private http: HttpClient) { }

  public getWeather(lat: number, lon: number) {
    this.WeatherAPI_URL = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=b2462c9b4b5f88432efc95dbbad3754a';

    return this.http.get(this.WeatherAPI_URL);
  }

}