import { Component } from '@angular/core';

import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Firebase } from '@ionic-native/firebase/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private alertCtrl: AlertController,
    private firebase: Firebase
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.solicitarTokenDoFirebase();
    });
  }


  solicitarTokenDoFirebase() {

    this.firebase.getToken()
      .then(token => {
        console.log("firebase token recebido", token);
        this.enviarTokenParaOservidor(token);
        this.iniciarListenerDeNotificacoes();
      }) // save the token server-side and use it to push notifications to this device
      .catch(error => {
        console.error('Error getting token', error)
      });

  }

  iniciarListenerDeNotificacoes() {

    this.firebase.onNotificationOpen().subscribe((notification: any) => {

      console.log(notification);
      if (!notification.tap) {
        this.mostrarAlert(notification.title, notification.body);
      }

    });

  }

  enviarTokenParaOservidor(token) {

    // lógica para enviar o token para o seu servidor através da sua api
  }

  async mostrarAlert(titulo, texto) {
    const alert = await this.alertCtrl.create({
      header: titulo,
      message: texto,
      buttons: [
        {
          text: 'Entendi',
          handler: () => {
          }
        }
      ]
    });
    await alert.present();
  }

}
