
import { UserProvider } from './../../providers/user/user';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public userService:UserProvider) {
    
    this.userService.user.userName = localStorage.getItem('userName');
    this.userService.user.email = localStorage.getItem('email');
    this.userService.user.profileUploaded = localStorage.getItem('profileUploaded');
    console.log(this.userService.user)
    if(this.userService.user.userName != undefined || this.userService.user.userName != null && (this.userService.user.email != undefined || this.userService.user.email != null)){

      this.navCtrl.setRoot('ProfilePage')

    }
  }

  goToSignInPage() {
    this.navCtrl.push('LoginPage');
    
  }

  goToSignupPage() {
      this.navCtrl.push('SignupPage');
  }

}
