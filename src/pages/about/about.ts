import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PrivacyPage } from '../privacy/privacy';
import { TermsPage } from '../terms/terms';
import { GooglePage } from '../google/google';
import { LoginPage } from '../login/login';

import { AuthService } from '../../providers/auth-service';

@Component({
	selector: 'page-about',
	templateUrl: 'about.html'
})
export class AboutPage {

	constructor(public navCtrl: NavController, private auth: AuthService) {}

	public openPrivacy() {
		this.navCtrl.push(PrivacyPage);
	}

	public openTerms() {
		this.navCtrl.push(TermsPage);
	}	

	public openGoogle(){
		this.navCtrl.push(GooglePage);
	}

	public logout(){
		this.auth.logout().subscribe(success => {
			this.navCtrl.setRoot(LoginPage)
		});
	}

}
