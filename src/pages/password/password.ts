import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController, Loading } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AuthService } from '../../providers/auth-service';

@Component({
  selector: 'page-password',
  templateUrl: 'password.html'
})
export class PasswordPage {
	loading: Loading;
	passwordCredentials = {email: ''};

	constructor(private navCtrl: NavController, 
  		private auth: AuthService, 
  		private alertCtrl: AlertController, 
  		private loadingCtrl: LoadingController) {
  		
  	}

	public getPassword(){
		this.showLoading();
		this.auth.password(this.passwordCredentials).subscribe(allowed => {
			if(allowed){
				setTimeout(() => {
					this.loading.dismiss();
					this.showConfirm();
				});
			}else{
				this.showError('Access Denied');
			}
		}, error => {
			this.showError(error);
		});
	}

	showConfirm(){
		let confirm = this.alertCtrl.create({
			title: 'Password Sent',
			message: 'Your password was sent to your email. Please check your email.',
			buttons:[
				{
					text: 'OK',
					handler: () => {
						this.navCtrl.setRoot(LoginPage);
					}
				}
			]
		});
		confirm.present();
	}

	showLoading(){
		this.loading = this.loadingCtrl.create({
			content: 'Please wait...'
		});
		this.loading.present();
	}

	showError(text){
		setTimeout(() => {
			this.loading.dismiss();
		});

		let alert = this.alertCtrl.create({
			title: 'Fail',
			subTitle: text,
			buttons: ['OK']
		});

		alert.present(prompt);
	}
}
