import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ApiPopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-api-popover',
  templateUrl: 'api-popover.html',
})
export class ApiPopoverPage {

  public activeApi:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.activeApi = this.navParams.get('activeApi');
  }

}
