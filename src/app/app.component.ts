import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AccountPage } from '../pages/account/account';
import { HelpPage } from '../pages/help/help';
import { LoginPage } from '../pages/login/login';
import { AboutPage } from '../pages/about/about';

//import { DashboardPage } from '../pages/dashboard/dashboard';
//import { RegisterPage } from '../pages/register/register';
//import { ReferencePage } from '../pages/reference/reference';

@Component({
  templateUrl: 'app.html'
})
export class ApiVentory {
  @ViewChild(Nav) nav: Nav;

  public rootPage: any = HomePage;

  public title: string = 'ApiVentory';
  public version: string = 'V.20180708.1';

  public pages: Array<{title: string, component: any, icon: string, description: string}>;
  public links: Array<{title: string, component: any}>

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen) {

    this.begin();

    this.pages = [
      { title: 'Home/Dashboard', component: HomePage, icon: 'home', description: 'Your App, Our Api' },
      { title: 'Account/Billing', component: AccountPage, icon: 'card', description: 'Your Subscription and Billing'},
      { title: 'Help/Support', component: HelpPage, icon: 'help-circle', description: 'We\'re Here to Help'},
      { title: 'Login/Register', component: LoginPage, icon: 'person', description: 'Let\'s Begin'}
    ];

    this.links = [
      {title: 'Help', component: HelpPage},
      {title: 'About', component: AboutPage}
    ];

  }

  public begin():void {
    this.platform.ready().then(() => {
      this.statusBar.hide();
      this.splashScreen.hide();
    });
  }

  public open(page):void {
    this.nav.setRoot(page.component);
  }
}
