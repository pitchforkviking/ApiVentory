import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {  

  public statements: Array<{number: number, title: string, description: string}>;
  public steps: Array<{number: number, title: string, description: string, image: string}>;

  constructor(
    public navCtrl: NavController) {

      this.statements = [
        {number: 1, title: 'Simple', description: 'Simple, yet Sophisticated'},
        {number: 2, title: 'Secure', description: 'Encryption, End-to-End'},
        {number: 3, title: 'Scalable', description: 'Scale, from 4 to 4 Million'}
      ];

      this.steps = [
        {number: 1, title: 'Get Key', description: 'Register for an Api Key', image: '../../assets/imgs/key.jpg'},
        {number: 2, title: 'Call Api', description: 'Call Our Api with the Key', image: '../../assets/imgs/api.jpg'},
        {number: 3, title: 'Profit', description: 'Make Your App and Make Money', image: '../../assets/imgs/profit.jpg'}
      ];

  }
}
