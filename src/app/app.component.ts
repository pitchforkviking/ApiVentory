import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AccountPage } from '../pages/account/account';
import { HelpPage } from '../pages/help/help';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ReferencePage } from '../pages/reference/reference';

@Component({
  templateUrl: 'app.html'
})
export class ApiVentory {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  //currentPage: any;
  //public currentYear: any;

  pages: Array<{title: string, component: any, icon: any}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home/Dashboard', component: HomePage, icon: 'home' },
      { title: 'Account/Billing', component: AccountPage, icon: 'card'},
      { title: 'Help/Support', component: HelpPage, icon: 'help-circle'},
      { title: 'Login/Register', component: LoginPage, icon: 'person'}
    ];

    //this.currentPage = this.pages[0];
    //this.currentYear = new Date().getFullYear();


  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    //this.currentPage = page;
    this.nav.setRoot(page.component);
  }
}
