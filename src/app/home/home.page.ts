import { Component } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  isCordovaPlatform = false;

  constructor(private platform: Platform,
              private alertCtrl: AlertController) {
    if (this.platform.is('cordova')) {
      this.isCordovaPlatform = true;
    } else {
      this.presentAlert();
    }
  }


  async presentAlert() {
    const alert = await this.alertCtrl.create({
      message: 'Please run this project on an Android or IOS device',
    });
    await alert.present();
    console.error('please run this project on an Android or IOS device');
  }

}
