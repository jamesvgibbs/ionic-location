import { Component, ViewChild } from '@angular/core';
import { NavController, Content } from 'ionic-angular';
import { Http } from '@angular/http';

@Component({
  selector: 'page-google',
  templateUrl: 'google.html'
})
export class GooglePage {
	@ViewChild(Content) content: Content;

	public text: any;
	showing: boolean = false;

  	constructor(public navCtrl: NavController, public http: Http) {
  		this.http = http;
  		this.http.get('/assets/google/license.txt')
            .subscribe(data =>{
              console.log(data);
              this.text = data['_body'];
            },error=>{
                console.log(error);
            } );
  	}

	public getMapsLegal(){
		if(!this.showing){
			var div = document.getElementById('licenseView');
			div.innerText = this.text;
			div.style.display = 'block';
			this.showing = !this.showing;
		}else{
			var div = document.getElementById('licenseView');
			div.style.display = 'none';
			this.showing = !this.showing
		}
	}

	public scrollToTop() {
		this.content.scrollToTop();
	}
}
