import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  public apis: Array<{title: string, type: string, request: string}>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {

      this.apis = [
        {title: 'Leaderboard', type: 'GET', request: '/api/Leaderboard'},
        {title: 'Leaderboard', type: 'POST', request: '/api/Leaderboard'},
        {title: 'Encryption', type: 'GET', request: '/api/Encryption'}
      ];
  }
}
