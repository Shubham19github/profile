import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup} from '@angular/forms';
import { ILoginResult } from '../../interface/loginResult.interface';
import { UserProvider } from './../../providers/user/user'

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  signinForm: FormGroup;
  email: string = null;
  password: string = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder,
              public userService : UserProvider) {

                
  }

  ngOnInit() {
    this.signinForm = this.formBuilder.group({
        email: [''],
        password: ['']
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  public async onSignIn(){
    let loginResult : ILoginResult = await this.userService.login(this.signinForm.value);
    console.log(loginResult)
    if(loginResult.success == true){
      localStorage.setItem('userName',loginResult.User.userName);
      localStorage.setItem('email',loginResult.User.email);
      localStorage.setItem('profileUploaded',loginResult.User.profileUploaded);
      this.userService.user.userName = loginResult.User.userName
      this.userService.user.email = loginResult.User.email
      this.userService.user.profileUploaded = loginResult.User.profileUploaded
      this.navCtrl.push('ProfilePage', {userDetail : loginResult.User});
    }
  }

}
