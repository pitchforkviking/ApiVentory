import { Component } from '@angular/core';
import { NavController, NavParams, PopoverController } from 'ionic-angular';

import {ApiPopoverPage} from '../api-popover/api-popover';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  public activeApis: Array<{title: string, type: string, request: string, base: string, params: string}>;
  public availableApis: Array<{title: string, type: string, request: string}>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private popoverCtrl: PopoverController) {

      this.activeApis = [
        {title: 'Leaderboard', type: 'GET', request: 'api/v1/Leaderboard', base: 'https://apiventory.com/', params: '{ \'user\': sherlock@apiventory.com }' },
        {title: 'Leaderboard', type: 'POST', request: 'api/v1/Leaderboard', base: 'https://apiventory.com/', params: '{ \'user\': sherlock@apiventory.com, \'score\': 100}'},
        {title: 'Encryption', type: 'GET', request: 'api/v1/Encryption', base: 'https://apiventory.com/', params: '{ \'key\': sherlock, \'value\': P@$5w0rD }'}
      ];

      this.availableApis = [
        {title: 'Notification', type: 'GET', request: '/api/Notification'},
        {title: 'Notification', type: 'POST', request: '/api/Leaderboard'},
        {title: 'Search', type: 'GET', request: '/api/Search'},
        {title: 'Query', type: 'GET', request: '/api/Query'},
      ];
  }

  present(activeApi:any) {

    let popover = this.popoverCtrl.create(ApiPopoverPage, {'activeApi': activeApi});
    popover.present();

  }
}
