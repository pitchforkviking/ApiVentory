import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RequestPage } from '../request/request'

@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {

  public sections: Array<string>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {

      this.sections = ['Account', 'Pricing', 'Quota', 'Login'];
  }

  public request(): void{
    this.navCtrl.push(RequestPage);
  }
}
