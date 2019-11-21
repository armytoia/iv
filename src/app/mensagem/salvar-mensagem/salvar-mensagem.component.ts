import { Component, OnInit } from '@angular/core';
import { Mensagem } from 'src/app/mensagem';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { PopoverController, ModalController } from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-salvar-mensagem',
  templateUrl: './salvar-mensagem.component.html',
  styleUrls: ['./salvar-mensagem.component.scss'],
})
export class SalvarMensagemComponent implements OnInit {
  mensagem: Mensagem = new Mensagem();

  constructor(public popoverController: PopoverController, private modal: ModalController, private afAuth: AngularFireAuth, private fire: AngularFireDatabase, private rota: Router) { }
  enviar() {
    if (this.mensagem.key == null) {
      this.fire.list('mensagem').push(this.mensagem);
      this.mensagem = new Mensagem();
      this.rota.navigate(['listar-mensagem']);
    }
    else {
      this.fire.object('mensagem/' + this.mensagem.key).update(this.mensagem);
      this.modal.dismiss();
    }
  }
  ngOnInit() {

  }
  logout() {
    this.afAuth.auth.signOut();
    this.rota.navigate(['home']);
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
