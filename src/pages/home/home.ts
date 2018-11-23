import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToSignInPage() {
    this.navCtrl.push('LoginPage');
  }

  goToSignupPage() {
      this.navCtrl.push('SignupPage');
  }

}
