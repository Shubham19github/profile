import { IFileUpload } from './../../interface/uploadImg.interface';
import { UserProvider } from './../../providers/user/user';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  profileDetails : any;
  profileImage:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public userService : UserProvider) {
    this.profileImage = 'assets/imgs/user.png'
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.profileDetails = this.navParams.get('userDetail')
    if(this.userService.user.profileUploaded != ""){
      this.profileImage = this.userService.user.profileUploaded;
    }
    console.log(this.profileDetails);
    
  }

  ngOnInit() {
   
  }

  inputFiles(){
    document.getElementById('myFileInput').click();
  }

  detectFiles(event){
    let file = event.target.files;
    console.log(file,file.files)
    this.UploadImage(file);
  }

  public async UploadImage(file){
    let loginResult : any = await this.userService.fileUpload(this.userService.user.email,file);
    console.log(loginResult)
    if(loginResult.link){
      localStorage.setItem('profileUploaded',loginResult.link);
      this.userService.user.profileUploaded = loginResult.link;
      this.profileImage=null;
      this.profileImage=loginResult.link
      console.log(this.profileImage)
      //this.profileImage=loginResult.link+"#" + new Date().getTime();
    }
  }


}
