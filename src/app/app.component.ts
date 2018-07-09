import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AccountPage } from '../pages/account/account';
import { HelpPage } from '../pages/help/help';
import { LoginPage } from '../pages/login/login';
import { AboutPage } from '../pages/about/about';

import { DashboardPage } from '../pages/dashboard/dashboard';
import { RegisterPage } from '../pages/register/register';
import { ReferencePage } from '../pages/reference/reference';

import { PaymentPage } from '../pages/payment/payment';
import { PricingPage } from '../pages/pricing/pricing';
import { LogoutPage } from '../pages/logout/logout';
import { ProfilePage } from '../pages/profile/profile';

@Component({
  templateUrl: 'app.html'
})
export class ApiVentory {
  @ViewChild(Nav) nav: Nav;

  public rootPage: any = HomePage;
  public currentPage: string = 'Home';

  public title: string = 'ApiVentory';
  public version: string = 'V.20180708.1';

  public pages: Array<{title: string, component: any, icon: string, description: string, subpages: Array<{title: string, component: any}>}>;
  
  public links: Array<{title: string, component: any}>

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen) {

    this.begin();

    this.pages = [
      { title: 'Account', component: AccountPage, icon: 'construct', description: 'Your App', subpages: [{title: 'Dashboard', component: DashboardPage}, {title: 'Account', component: AccountPage}] },
      { title: 'Home', component: HomePage, icon: 'home', description: 'Our Api', subpages: [{title: 'Home', component: HomePage}, {title: 'Pricing', component: PricingPage}] },      
      { title: 'Help', component: HelpPage, icon: 'help-circle', description: 'Here to Help', subpages: [{title: 'Reference', component: ReferencePage}, {title: 'Help', component: HelpPage}] },
      { title: 'Login', component: LoginPage, icon: 'person', description: 'Let\'s Begin', subpages: [{title: 'Login', component: LoginPage}, {title: 'Register', component: RegisterPage}] },
      { title: 'Profile', component: ProfilePage, icon: 'contact', description: 'Kiran Raj', subpages: [{title: 'Edit', component: ProfilePage}, {title: 'Logout', component: LogoutPage}] }
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
    this.currentPage = page.title;
    this.nav.setRoot(page.component);
  }
}
