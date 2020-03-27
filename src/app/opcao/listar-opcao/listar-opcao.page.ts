import { Component, OnInit } from '@angular/core';
import { Opcao } from '../entidade/opcao';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';
import * as _ from 'lodash';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-listar-opcao',
  templateUrl: './listar-opcao.page.html',
  styleUrls: ['./listar-opcao.page.scss'],
})
export class ListarOpcaoPage implements OnInit {


  ngOnInit() {
  }
  
}
