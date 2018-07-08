import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public plans: Array<{title: string, api: string, request: string, price: string}>;

  constructor(
    public navCtrl: NavController) {

      this.plans = [
        {title: 'Premium', api: 'Unlimited APIs', request: 'Unlimited Requests', price: '$100 per Month'},
        {title: 'Standard', api: '100 APIs', request: '1000 Requests', price: '$10 per Month'},
        {title: 'Free', api: '10 APIs', request: '100 Requests', price: 'Free'},
        {title: 'Pay As You Go', api: '$1 per API', request: '$0.1 per Request', price: 'Varies'},
      ]
  }
}
