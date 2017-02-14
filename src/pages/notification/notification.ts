import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html'
})
export class NotificationPage {

  	constructor(public navCtrl: NavController, private auth: AuthService) {}

  	// https://www.joshmorony.com/getting-familiar-with-local-notifications-in-ionic-2/

	public logout(){
		this.auth.logout().subscribe(success => {
			this.navCtrl.setRoot(LoginPage)
		});
	}

}
