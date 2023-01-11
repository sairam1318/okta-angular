import { Injectable } from '@angular/core';
import OktaSignIn from '@okta/okta-signin-widget';

@Injectable({
  providedIn: 'root'
})
export class Okta {
  widget;

  constructor() {
    this.widget = new OktaSignIn({
      baseUrl: 'https://dev-37434210.okta.com',
      clientId: "0oa7wqtbwoSmmLoQ75d7",
      redirectUri: 'http://localhost:4200/login/callback',
    });
  }

  getWidget() {
    return this.widget;
  }
}
