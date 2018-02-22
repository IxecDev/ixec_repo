import { Component } from '@angular/core';

import { EnvVars } from './services/envvars.service';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  siteClassName: string = '';

  constructor(public EnvVars: EnvVars) {
      var location = EnvVars.getLocation();

      // INITIALIZE VARIABLES
      switch (location) {
          case 'esmeralda':
              document.title = 'VIVE Esmeralda';

              this.siteClassName = 'vive';

              EnvVars.TITLE = 'VIVE Esmeralda';
              EnvVars.LOCATION_COORDS = [19.5591218, -99.2961489];
              EnvVars.LOGO_IMAGE = 'assets/img/logo_vive.png';

              break;
          case 'inside':
              document.title = 'Satélite Inside';

              this.siteClassName = 'inside';

              EnvVars.TITLE = 'Satélite Inside';
              EnvVars.LOCATION_COORDS = [19.5591218, -99.2961489];
              EnvVars.LOGO_IMAGE = 'assets/img/logo_satelite.png';

              break;
          case 'queretaro':
              document.title = 'Querétaro';

              this.siteClassName = 'queretaro';

              EnvVars.TITLE = 'Querétaro';
              EnvVars.LOCATION_COORDS = [19.5591218, -99.2961489];
              EnvVars.LOGO_IMAGE = 'assets/img/logo_queretaro.png';

              break;
      }
  }
}
