import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { LocationApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { PasswordPage } from '../pages/password/password';
import { HomePage } from '../pages/home/home';
import { NotificationPage } from '../pages/notification/notification';
import { CampusmapPage } from '../pages/campusmap/campusmap';
import { AboutPage } from '../pages/about/about';
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
    PasswordPage,
    LoginPage,
    NotificationPage,
    CampusmapPage,
    AboutPage,
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
    PasswordPage,
    NotificationPage,
    CampusmapPage,
    AboutPage,
    TermsPage,
    PrivacyPage,
    GooglePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, 
    AuthService, 
    ConnectivityService, 
    LocationTracker,
    Storage]
})
export class AppModule {}
