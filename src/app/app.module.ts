import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { LocationApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { HomePage } from '../pages/home/home';
import { NotificationPage } from '../pages/notification/notification';
import { CampusmapPage } from '../pages/campusmap/campusmap';
import { HelpPage } from '../pages/help/help';
import { TermsPage } from '../pages/terms/terms';
import { PrivacyPage } from '../pages/privacy/privacy';
import { GooglePage } from '../pages/google/google';

import { AuthService } from '../providers/auth-service';
import { ConnectivityService } from '../providers/connectivity-service';
import { LocationTracker } from '../providers/location-tracker';

@NgModule({
  declarations: [
    LocationApp,
    HomePage,
    LoginPage,
    RegisterPage,
    NotificationPage,
    CampusmapPage,
    HelpPage,
    TermsPage,
    PrivacyPage,
    GooglePage
  ],
  imports: [
    IonicModule.forRoot(LocationApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    LocationApp,
    HomePage,
    LoginPage,
    RegisterPage,
    NotificationPage,
    CampusmapPage,
    HelpPage,
    TermsPage,
    PrivacyPage,
    GooglePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, AuthService, ConnectivityService, LocationTracker]
})
export class AppModule {}
