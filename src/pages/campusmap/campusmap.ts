import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { AuthService } from '../../providers/auth-service';
import { LoginPage } from '../login/login';
import { GoogleMap, GoogleMapsEvent, GoogleMapsLatLng, Geolocation } from 'ionic-native';

@Component({
  selector: 'page-campusmap',
  templateUrl: 'campusmap.html'
})
export class CampusmapPage {

	@ViewChild('map') mapElement: ElementRef;
 
 	map: GoogleMap;
 	lastLocation: any;
 	
 	// LOOK AT USING SDK FOR NATIVE SUPPORT
  	// https://github.com/mapsplugin/cordova-plugin-googlemaps
  	// https://www.joshmorony.com/integrating-native-google-maps-into-an-ionic-2-application/
  	constructor(public navCtrl: NavController, private auth: AuthService, public platform: Platform) {

  	}

  	ngAfterViewInit(){
  		this.initMap();
  	}

	getLocation(){
		Geolocation.getCurrentPosition().then((position) => {

			this.lastLocation = new GoogleMapsLatLng(position.coords.latitude, position.coords.longitude);

			this.initMap();
		});
	}

	initMap(){
		if(this.lastLocation){
			this.map = new GoogleMap('map', {
					'backgroundColor': 'white',
					'controls': {
					'compass': true,
					'myLocationButton': true,
					'indoorPicker': true,
					'zoom': true
				},
					'gestures': {
					'scroll': true,
					'tilt': true,
					'rotate': true,
					'zoom': true
				},
					'camera': {
					'latLng': this.lastLocation,
					'tilt': 30,
					'zoom': 15,
					'bearing': 50
				}
			});
	 
	        this.map.on(GoogleMapsEvent.MAP_READY).subscribe(() => {
	        	console.log('Map is ready!');
	        });
	    }else{
	    	this.getLocation();
	    }
	}


	public logout(){
		this.auth.logout().subscribe(success => {
			this.navCtrl.setRoot(LoginPage)
		});
	}

}
