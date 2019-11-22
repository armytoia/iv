import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import { IonicModule } from '@ionic/angular';

import { SalvarMensagemComponent } from './salvar-mensagem.component';

const routes: Routes = [
  {
    path: '',
    component: SalvarMensagemComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalvarMensagemComponent ],
  providers: [AngularFireAuth]
})
export class SalvarMensagemComponentModule {}
