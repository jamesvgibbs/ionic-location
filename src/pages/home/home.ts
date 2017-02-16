import { Component } from '@angular/core';
import { NavController, MenuController, Slides } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { AuthService } from '../../providers/auth-service';
import { LoginPage } from '../login/login';
import { NotificationPage } from '../notification/notification';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	username = '';
	email = '';
	showSkip = true;

	constructor(public navCtrl: NavController, 
		private auth: AuthService, 
		public menu: MenuController, 
		public storage: Storage) {
		//let info = this.auth.getUserInfo();
		//this.username = info.name;
		//this.email = info.email;
	}

	public logout(){
		this.auth.logout().subscribe(success => {
			this.navCtrl.setRoot(LoginPage)
		});
	}

	startApp() {
		this.navCtrl.setRoot(NotificationPage);
		//this.navCtrl.push(NotificationPage).then(() => {
			//this.storage.set('hasSeenTutorial', 'true');
		//});
	}

	slideChangeStart(slider: Slides) {
		this.showSkip = !slider.isEnd();
	}

	ionViewDidEnter() {
		// the root left menu should be disabled on the tutorial page
		this.menu.enable(false);
	}

	ionViewDidLeave() {
		// enable the root left menu when leaving the tutorial page
		this.menu.enable(true);
	}

}
