export class MainEntity {
  
  private humidity: number;
  private pressure: number;
  private temp: number;
  private temp_max: number;
  private temp_min: number;

  constructor(humidity: number,
              pressure: number,
              temp: number,
              temp_max: number,
              temp_min: number) {
    this.humidity = humidity;
    this.pressure = pressure;
    this.temp = temp;
    this.temp_max = temp_max;
    this.temp_min = temp_min;
  }

  public setHumidity(humidity: number) {
    this.humidity = humidity;
  }

  public getHumidity(): number {
    return this.humidity;
  }

  public setPressure(pressure: number) {
    this.pressure = pressure;
  }

  public getPressure(): number {
    return this.pressure;
  }

  public setTemp(temp: number) {
    this.temp = temp;
  }

  public getTemp(): number {
    return this.temp;
  }

  public setTemp_max(temp_max: number) {
    this.temp_max = temp_max;
  }

  public getTemp_max(): number {
    return this.temp_max;
  }

  public setTemp_min(temp_min: number) {
    this.temp_min = temp_min;
  }

  public getTemp_min(): number {
    return this.temp_min;
  }

}