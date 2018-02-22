export class CoordEntity {
  
  private lat: number;
  private lon: number;

  constructor(lat: number,
              lon: number) {
    this.lat = lat;
    this.lon = lon;
  }

  public setLat(lat: number) {
    this.lat = lat;
  }

  public getLat(): number {
    return this.lat;
  }

  public setLon(lon: number) {
    this.lon = lon;
  }

  public getLon(): number {
    return this.lon;
  }

}