import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { SalvarPaisPage } from 'src/app/pais/salvar-pais/salvar-pais.page';
import { SalvarAlunoPage } from 'src/app/aluno/salvar-aluno/salvar-aluno.page';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { Chat } from "../entidade/chat";


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  chatRef: any;
  uid : string;
  text : string;
  constructor(public popoverController: PopoverController, private afAuth: AngularFireAuth, private router: Router, public fs: AngularFirestore) {
  this.uid = localStorage.getItem('userid');
  this.chatRef= this.fs.collection('chats', ref => ref.orderBy('Timestamp')).snapshotChanges();
}
send(){
  if(this.text != ''){
    this.fs.collection('chats').add({
      Name: this.afAuth.auth.currentUser.displayName,
      Message: this.text,
      UserID: this.afAuth.auth.currentUser.uid,
      Timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    this.text = '';
  }
}

  ngOnInit() {
  }
  /*async tela(ev: any) {
      const popover = await this.popoverController.create({
        component: OpcoesComponent,
        event: ev,
        translucent: true
      });
      return await popover.present();
    }*/
    async telaa(ev: any) {
        const popover = await this.popoverController.create({
          component: SalvarAlunoPage,
          event: ev,
          translucent: true
        });
        return await popover.present();
      }
      logout() {
        this.afAuth.auth.signOut();
        this.router.navigate(['home']);
      }

}
