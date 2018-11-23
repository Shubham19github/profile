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
    if(loginResult.success == true){
      this.navCtrl.push('ProfilePage', {userDetail : loginResult.User});
    }
  }

}
