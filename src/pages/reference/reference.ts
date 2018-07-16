import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';

import {ApiPopoverPage} from '../api-popover/api-popover';

@Component({
  selector: 'page-reference',
  templateUrl: 'reference.html',
})
export class ReferencePage {

  public apis: Array<{title: string, type: string, request: string, base: string, params: string}>;

  constructor(
    public navCtrl: NavController,
    public popoverCtrl: PopoverController,
    public navParams: NavParams) {

      this.apis = [
        {title: 'Event', type: 'GET', request: 'api/v1/Event', base: 'https://apiventory.com/', params: '{ \'event\': OrderComplete }' },
        {title: 'Leaderboard', type: 'POST', request: 'api/v1/Leaderboard', base: 'https://apiventory.com/', params: '{ \'user\': sherlock@apiventory.com, \'score\': 100}'},
        {title: 'Encryption', type: 'GET', request: 'api/v1/Encryption', base: 'https://apiventory.com/', params: '{ \'key\': sherlock, \'value\': P@$5w0rD }'},
        {title: 'Inventory', type: 'GET', request: 'api/v1/Inventory', base: 'https://apiventory.com/', params: '{ \'key\': sherlock }'}
      ];
  }

  present(api:any) {

    let popover = this.popoverCtrl.create(ApiPopoverPage, {'activeApi': api});
    popover.present();

  }

}
