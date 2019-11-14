import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { RoomPage } from '../room/room';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  data: { nickname: ""};
  constructor() {}
 enterNickname(){
   this.navCtrl.setRoot(RoomPage, { nickname : this.data.nickname
   });
 }
 enviar(){
   }
  ngOnInit() {
  }

}
