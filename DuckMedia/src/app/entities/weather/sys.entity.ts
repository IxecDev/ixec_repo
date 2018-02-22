export class SysEntity {
  
  private country: string;
  private id: number;
  private message: number;
  private sunrise: number;
  private sunset: number;
  private type: number;

  constructor(country: string,
              id: number,
              message: number,
              sunrise: number,
              sunset: number,
              type: number) {
    this.country = country;
    this.id = id;
    this.message = message;
    this.sunrise = sunrise;
    this.sunset = sunset;
    this.type = type;
  }

  public setCountry(country: string) {
    this.country = country;
  }

  public getCountry(): string {
    return this.country;
  }

  public setId(id: number) {
    this.id = id;
  }

  public getId(): number {
    return this.id;
  }

  public setMessage(message: number) {
    this.message = message;
  }

  public getMessage(): number {
    return this.message;
  }

  public setSunrise(sunrise: number) {
    this.sunrise = sunrise;
  }

  public getSunrise(): number {
    return this.sunrise;
  }

  public setSunset(sunset: number) {
    this.sunset = sunset;
  }

  public getSunset(): number {
    return this.sunset;
  }

  public setType(type: number) {
    this.type = type;
  }

  public getType(): number {
    return this.type;
  }

}