import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup} from '@angular/forms';
import { UserProvider } from './../../providers/user/user';
import { ISignupResult } from '../../interface/signupResult.interface';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  signupForm: FormGroup;
  email: string = null;
  password: string = null;
  userName : string = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder,
    public userService : UserProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
        email: [''],
        password: [''],
        userName : ['']
    });
  }

  public async onSignUp(){
    let signupResult : ISignupResult = await this.userService.signup(this.signupForm.value);
      if(signupResult.success == true){
        this.navCtrl.push('LoginPage');
      }
  }
}
