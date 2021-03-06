import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogin } from '../../interface/login.interface';
import { ISignup } from '../../interface/signup.interface';
import { IFileUpload } from '../../interface/uploadImg.interface';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserProvider {

    urlFront: string = 'https://us-central1-chatapp-sayhello.cloudfunctions.net/';
    user = {
        userName: "",
        email: "",
        profileUploaded:""
    };

    constructor(public http: HttpClient) {
        console.log('Hello UserProvider Provider');

    }

 

    login(credential: ILogin) {
        let fullUrl: string = this.urlFront + 'login';
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

    signup(credential: ISignup) {
        let fullUrl: string = this.urlFront + 'registerUser';
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

    fileUpload(email,file) {
        let fullUrl: string = this.urlFront + 'uploadImg';
        let formData: FormData = new FormData();
        console.log(file[0])
        formData.append('file', file[0]);
        return new Promise((resolve, reject) => {
            this.http.post(fullUrl, formData,{headers:{email:email}}).subscribe(
                data => {
                    console.log(data)
                    resolve(data);
                },
                err => {
                    reject(err);
                }
            );
        });
    }

}
