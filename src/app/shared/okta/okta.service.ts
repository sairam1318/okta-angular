import { Injectable } from '@angular/core';
import OktaSignIn from '@okta/okta-signin-widget';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Okta {
  widget;

  constructor() {
    this.widget = new OktaSignIn({
      baseUrl: environment.baseUrl,
      clientId: environment.clientId,
      redirectUri: 'http://localhost:4200/login/callback',
    });
  }

  getWidget() {
    return this.widget;
  }
}
