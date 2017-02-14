import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export class User {
	name: string;
	email: string;

	constructor(name: string, email: string){
		this.name = name;
		this.email = email;
	}
}

// OTHER OPTIONS
// https://www.joshmorony.com/creating-role-based-authentication-with-passport-in-ionic-2-part-1/
// https://www.joshmorony.com/creating-role-based-authentication-with-passport-in-ionic-2-part-2/

@Injectable()
export class AuthService {
	currentUser: User;

	public login(credentials){
		if(credentials.email === null || credentials.password === null){
			return Observable.throw('Please insert credentials');
		}else{
			return Observable.create(observer => {
				let access = (credentials.password === 'pass' && credentials.email === 'email');
        		this.currentUser = new User('Bobby', 'bobby@bob.com');
        		observer.next(access);
        		observer.complete();
			});
		}
	}
 	
 	public register(credentials){
 		console.log(credentials);
 		if(credentials.email === null || credentials.password === null){
 			return Observable.throw('Please insert credentials');
 		}else{
 			return Observable.create(observer => {
 				observer.next(true);
 				observer.complete();
 			});
 		}
 	}

 	public getUserInfo() : User {
 		return this.currentUser;
 	}

 	public logout(){
 		return Observable.create(observer => {
 			this.currentUser = null;
 			observer.next(true);
 			observer.complete();
 		});
 	}
}
