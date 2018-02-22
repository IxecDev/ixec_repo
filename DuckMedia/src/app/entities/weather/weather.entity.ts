import { CloudsEntity } from './clouds.entity';
import { CoordEntity } from './coord.entity';
import { MainEntity } from './main.entity';
import { SysEntity } from './sys.entity';
import { SWeatherEntity } from './sweather.entity';
import { WindEntity } from './wind.entity';

export class WeatherEntity {

  private base: string;
  private clouds: CloudsEntity;
  private cod: number;
  private coord: CoordEntity;
  private dt: number;
  private id: number;
  private main: MainEntity;
  private name: string;
  private sys: SysEntity;
  private visibility: number;
  private weather: Array<SWeatherEntity>;
  private wind: WindEntity;


  constructor(base: string,
              clouds: CloudsEntity,
              cod: number,
              coord: CoordEntity,
              dt: number,
              id: number,
              main: MainEntity,
              name: string,
              sys: SysEntity,
              visibility: number,
              weather: Array<SWeatherEntity>,
              wind: WindEntity) {
    this.base = base;
    this.clouds = clouds;
    this.cod = cod;
    this.coord = coord;
    this.dt = dt;
    this.id = id;
    this.main = main;
    this.name = name;
    this.sys = sys;
    this.visibility = visibility;
    this.weather = weather;
    this.wind = wind;
  }

  public setBase(base: string) {
    this.base = base;
  }

  public getBase(): string {
    return this.base;
  }

  public setClouds(clouds: CloudsEntity) {
    this.clouds = clouds;
  }

  public getClouds(): CloudsEntity {
    return this.clouds;
  }

  public setCod(cod: number) {
    this.cod = cod;
  }

  public getCod(): number {
    return this.cod;
  }

  public setCoord(coord: CoordEntity) {
    this.coord = coord;
  }

  public getCoord(): CoordEntity {
    return this.coord;
  }

  public setDt(dt: number) {
    this.dt = dt;
  }

  public getDt(): number {
    return this.dt;
  }

  public setId(id: number) {
    this.id = id;
  }

  public getId(): number {
    return this.id;
  }

  public setMain(main: MainEntity) {
    this.main = main;
  }

  public getMain(): MainEntity {
    return this.main;
  }

  public setName(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public setSys(sys: SysEntity) {
    this.sys = sys;
  }

  public getSys(): SysEntity {
    return this.sys;
  }

  public setVisibility(visibility: number) {
    this.visibility = visibility;
  }

  public getVisibility(): number {
    return this.visibility;
  }

  public setWeather(weather: Array<SWeatherEntity>) {
    this.weather = weather;
  }

  public getWeather(): Array<SWeatherEntity> {
    return this.weather;
  }

  public setWind(wind: WindEntity) {
    this.wind = wind;
  }

  public getWind(): WindEntity {
    return this.wind;
  }

}