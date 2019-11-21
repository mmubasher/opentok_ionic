import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';
import { ConfigService } from '../services/config.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

declare var OT: any;
declare var Cordova: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  isCordovaPlatform = false;

  session: any; // used by opentok
  publisher: any; // used by opentok
  subscriber: any; // used by opentok
  connection: any; // used by opentok

  isCalling = false;
  publishAudio = true;
  publishVideo = true;

  constructor(private platform: Platform,
              private alertCtrl: AlertController,
              private configSrv: ConfigService,
              private cdr: ChangeDetectorRef,
              private iapp: InAppBrowser) {
    if (this.platform.is('cordova')) {
      this.isCordovaPlatform = true;
    } else {
      this.presentAlert('please run this project on an Android or IOS device');
    }
  }

  ngOnInit(): void {
  }

  openBrowser() {
    var browser = this.iapp.create('https://appr.tc/r/mytest');
  }

  startCall(): void {
    if (typeof OT !== 'undefined' &&
      this.isCordovaPlatform) {
      this.session = OT.initSession(this.configSrv.get().apiKey, this.configSrv.get().sessionId);
      this.session.on({
        streamCreated: (event) => {
          this.subscriber = this.session.subscribe(event.stream, 'subscriber', {
            insertMode: 'append',
            showControls: 'true'
          });
          this.isCalling = true;
          OT.updateViews();
          this.cdr.detectChanges();
        },
        streamDestroyed: (event) => {
          console.log(`Stream ${event.stream.name} ended because ${event.reason}`);
        },
        connectionDestroyed: (event) => {
          console.log('connection destroyed');
        }
      });
      this.session.on('sessionDisconnected', (event) => {
        this.presentAlert('Call has ended');
        this.isCalling = false;
        OT.updateViews();
      });
      this.connection = this.session.connect(this.configSrv.get().token, () => {
        const publisherProps = <{ insertMode: string, fitMode: string, showControls: string }>{};
        publisherProps.insertMode = 'append';
        publisherProps.fitMode = 'cover';
        publisherProps.insertMode = 'replace';
        publisherProps.showControls = 'true';

        this.publisher = OT.initPublisher('publisher');
        this.session.publish(this.publisher, publisherProps);
      });
    }
  }

  toggleAudio(): void {
    if (this.isCalling) {
      if (this.publishAudio === false) {
        this.publisher.publishAudio(true);
        this.publishAudio = true;
        console.log('audio turned on');
        return;
      }
      if (this.publishAudio === true) {
        console.log('audio turned off');
        this.publisher.publishAudio(false);
        this.publishAudio = false;
      }
    }
  }

  toggleVideo(): void {
    if (this.isCalling) {
      if (this.publishVideo === true) {
        this.publisher.publishVideo(false);
        this.publishVideo = false;
        console.log('video turned off');
        return;
      }
      if (this.publishVideo === false) {
        this.publisher.publishVideo(true);
        this.publishVideo = true;
        console.log('video turned on');
      }
    }
  }

  endCall(): void {
    this.session.unpublish();
    this.session.unsubscribe(this.subscriber);
    this.session.disconnect();
    OT.updateViews();
    this.cdr.markForCheck();
    this.cdr.detectChanges();
  }

  private async presentAlert(msg: string) {
    const alert = await this.alertCtrl.create({message: msg});
    await alert.present();
  }
}
