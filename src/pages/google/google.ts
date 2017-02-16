import { Component, ViewChild } from '@angular/core';
import { NavController, Content } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-google',
  templateUrl: 'google.html'
})
export class GooglePage {
	@ViewChild(Content) content: Content;

  	constructor(public navCtrl: NavController, public http: Http) {
  		this.http = http;
  		this.http.get('/assets/google/license.txt')
			.subscribe(data =>{
				var div = document.getElementById('licenseView');
				div.innerText = data['_body'];
			},error=>{
				console.log(error);
			});
  	}

	public scrollToTop() {
		this.content.scrollToTop();
	}
}
