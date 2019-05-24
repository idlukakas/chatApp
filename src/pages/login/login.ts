import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { AuthService } from '../../app/auth.service';
import { HomePage } from '../home/home';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthService,
              private loadingCtrl: LoadingController, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  username = "";
  password = "";
  signIn(){
    //console.log ("Login vai ser feito aqui...");
    const loading = this.loadingCtrl.create ({
      content: "Signing you in..."
      });
      loading.present();
    this.authService.signIn(this.username, this.password).
    then((authState) => {
    console.log ("logou", authState);
    loading.dismiss();  
    this.navCtrl.setRoot(HomePage, {username: this.username});
    }).
    catch((error) => {
      loading.dismiss();
      const alert = this.alertCtrl.create({
      title: "Signin failed",
      message: error.message,
      buttons:['OK']
      });
      console.log ("Login falhou", error);
      alert.present()
    });
    }
    signUp(){
      this.navCtrl.setRoot("SignupPage");
      }
}
