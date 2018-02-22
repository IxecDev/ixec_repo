import { Injectable } from '@angular/core';

const locationIdList = {
  'esmeralda': 2,
  'satelite': 3,
  'queretaro': 4
};

@Injectable()
export class EnvVars {

	private LOCATION: string = '';
  private LOCATION_ID: number = null;
  private SITE: string = '';

  public TITLE: string;
  public LOCATION_COORDS: number[];
  public LOGO_IMAGE: string;

	public setLocation(name: string) {
		this.LOCATION = name;
    this.setLocationId(locationIdList[this.LOCATION]);
	}

	public getLocation(): string {
		return this.LOCATION;
	}

  public setSite(name: string) {
    this.SITE = name;
  }

  public getSite(): string {
    return this.SITE;
  }

  public setLocationId(location: number) {
    this.LOCATION_ID = location;
  }

  public getLocationId(): number {
    return this.LOCATION_ID;
  }

}