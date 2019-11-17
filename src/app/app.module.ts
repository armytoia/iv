import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';


import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import {Firebase} from '@ionic-native/firebase/ngx';
import { AngularFirestore } from '@angular/fire/firestore';
import { SalvarMensagemComponent } from './mensagem/salvar-mensagem/salvar-mensagem.component';
import { SMS } from '@ionic-native/sms/ngx';
//import { SalvarAlunoPage } from './aluno/salvar-aluno/salvar-aluno.page';

@NgModule({
  declarations: [AppComponent, SalvarMensagemComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, //SalvarAlunoPageModule,
    AngularFireModule.initializeApp({

      apiKey: "AIzaSyDLOPyDnuG0oxIZnTUgNXKvsFxWXStAOb8",
    authDomain: "ivvi-8df21.firebaseapp.com",
    databaseURL: "https://ivvi-8df21.firebaseio.com",
    projectId: "ivvi-8df21",
    storageBucket: "ivvi-8df21.appspot.com",
    messagingSenderId: "189075029472",
    appId: "1:189075029472:web:9463ca50e6a799b0803f85",
    measurementId: "G-XF9D0GWYNY"

  }), AngularFireDatabaseModule


],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    AngularFirestore,
    SMS,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
