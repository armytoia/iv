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
//import { SalvarAlunoPage } from './aluno/salvar-aluno/salvar-aluno.page';

@NgModule({
  declarations: [AppComponent],
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
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
