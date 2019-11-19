import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { ListarAlunoPage } from './listar-aluno.page';

const routes: Routes = [
  {
    path: '',
    component: ListarAlunoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListarAlunoPage],
  providers:[AngularFireAuth],
})
export class ListarAlunoPageModule {}
