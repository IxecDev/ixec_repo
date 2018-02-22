import { Component } from '@angular/core';

import { EnvVars } from '../services/envvars.service';

@Component({
  selector: 'site-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent {

  private title: string;
  private footerLogo: string;

  constructor(envVars: EnvVars) {
    this.title = envVars.TITLE;
    this.footerLogo = envVars.LOGO_IMAGE;
  }

}