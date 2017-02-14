import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PrivacyPage } from '../privacy/privacy';
import { TermsPage } from '../terms/terms';
import { GooglePage } from '../google/google';

@Component({
	selector: 'page-help',
	templateUrl: 'help.html'
})
export class HelpPage {

	constructor(public navCtrl: NavController) {}

	public openPrivacy() {
		this.navCtrl.push(PrivacyPage);
	}

	public openTerms() {
		this.navCtrl.push(TermsPage);
	}	

	public openGoogle(){
		this.navCtrl.push(GooglePage);
	}

}
