import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { EnvVars } from './envvars.service';

@Injectable()
export class DuckMedia {

  private DuckMediaUrl: string = 'http://higo.mx/api/rest/v2/web/home';
  private DuckMediaParams;

  private articleLimit: number = 16;
  private principalLimit: number = 10;

  constructor(private http: HttpClient, envVars: EnvVars) {
    this.DuckMediaParams = {
      'rand': (new Date().getTime()),
      'limit': this.articleLimit,
      'sectionId': 2,
      'cache': false,
      'principalLimit': this.principalLimit,
      'location': envVars.getLocationId()
    }
  }

  public getInformation() {
    return this.http.get(this.DuckMediaUrl, { params: this.DuckMediaParams });
  }

}