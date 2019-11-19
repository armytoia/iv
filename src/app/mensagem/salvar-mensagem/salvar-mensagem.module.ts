import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SalvarMensagemPage } from './salvar-mensagem.page';
import { AngularFireAuth } from 'angularfire2/auth';

const routes: Routes = [
  {
    path: '',
    component: SalvarMensagemPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalvarMensagemPage],
  providers:[AngularFireAuth],
})
export class SalvarMensagemPageModule {}
