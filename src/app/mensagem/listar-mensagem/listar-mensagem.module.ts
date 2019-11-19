import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListarMensagemPage } from './listar-mensagem.page';
import { AngularFireAuth } from 'angularfire2/auth';

const routes: Routes = [
  {
    path: '',
    component: ListarMensagemPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListarMensagemPage],
  providers:[AngularFireAuth],
})
export class ListarMensagemPageModule {}
