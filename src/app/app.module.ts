import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
//import { HttpClientModule } from '@angular/common/http';

import { ApiVentory } from './app.component';
import { HomePage } from '../pages/home/home';
import { AccountPage } from '../pages/account/account';
import { HelpPage } from '../pages/help/help';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ReferencePage } from '../pages/reference/reference';
import { AboutPage } from '../pages/about/about';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    ApiVentory,
    HomePage,
    AccountPage,
    HelpPage,
    DashboardPage,
    LoginPage,
    ReferencePage,
    RegisterPage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(ApiVentory),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ApiVentory,
    HomePage,
    AccountPage,
    HelpPage,
    DashboardPage,
    LoginPage,
    ReferencePage,
    RegisterPage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
