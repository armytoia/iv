import { Component, OnInit } from '@angular/core';
import { Mensagem } from 'src/app/mensagem';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
//import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-salvar-mensagem',
  templateUrl: './salvar-mensagem.page.html',
  styleUrls: ['./salvar-mensagem.page.scss'],
})
export class SalvarMensagemPage implements OnInit {
    mensagem: Mensagem = new Mensagem();
  ngOnInit(){
  }
/*  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }*/

  constructor(private fire : AngularFireDatabase, private rota: Router) { }
  enviar() {
    this.fire.list('mensagem').push(this.mensagem);
    this.mensagem = new Mensagem();
    this.rota.navigate(['/']);
  }
  /*this.localNotifications.schedule({
    id: 1,
    text: 'Single ILocalNotification',
    sound: isAndroid? 'file://sound.mp3': 'file://beep.caf',
    data: { secret: key }
  });


  // Schedule multiple notifications
  this.localNotifications.schedule([{
     id: 1,
     text: 'Multi ILocalNotification 1',
     sound: isAndroid ? 'file://sound.mp3': 'file://beep.caf',
     data: { secret:key }
    },{
     id: 2,
     title: 'Local ILocalNotification Example',
     text: 'Multi ILocalNotification 2',
     icon: 'http://example.com/icon.png'
  }]);


  // Schedule delayed notification
  this.localNotifications.schedule({
     text: 'Delayed ILocalNotification',
     trigger: {at: new Date(new Date().getTime() + 3600)},
     led: 'FF0000',
     sound: null
  });*/
}
