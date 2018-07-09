import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-pricing',
  templateUrl: 'pricing.html',
})
export class PricingPage {

  public plans: Array<{title: string, api: string, request: string, price: string}>;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) {

      this.plans = [
        {title: 'Premium', api: 'Unlimited APIs', request: 'Unlimited Requests', price: '$100 per Month'},
        {title: 'Standard', api: '100 APIs', request: '1000 Requests', price: '$10 per Month'},
        {title: 'Free', api: '10 APIs', request: '100 Requests', price: 'Free'},
        {title: 'Pay As You Go', api: '$1 per API', request: '$0.1 per Request', price: 'Varies'},
      ];
  } 

}
