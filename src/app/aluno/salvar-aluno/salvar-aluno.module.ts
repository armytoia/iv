import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SalvarAlunoPage } from './salvar-aluno.page';

const routes: Routes = [
  {
    path: '',
    component: SalvarAlunoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalvarAlunoPage]
})
export class SalvarAlunoPageModule {}
