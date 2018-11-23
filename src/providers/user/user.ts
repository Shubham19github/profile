import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogin } from '../../interface/login.interface';
import { ISignup } from '../../interface/signup.interface';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

  urlFront : string = 'https://us-central1-chatapp-sayhello.cloudfunctions.net/';

  constructor(public http: HttpClient) {
    console.log('Hello UserProvider Provider');
  }

  login(credential : ILogin) {
    let fullUrl : string = this.urlFront + 'login';
    return new Promise((resolve, reject) => {
        this.http.post(fullUrl, credential).subscribe(
            data => {
                resolve(data);
            },
            err => {
                reject(err);
            }
        );
    });
  }

  signup(credential : ISignup) {
    let fullUrl : string = this.urlFront + 'registerUser';
    return new Promise((resolve, reject) => {
        this.http.post(fullUrl, credential).subscribe(
            data => {
                resolve(data);
            },
            err => {
                reject(err);
            }
        );
    });
  }

}
