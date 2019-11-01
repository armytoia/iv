import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import { IonicModule } from '@ionic/angular';

import { SalvarPaisPage } from './salvar-pais.page';

const routes: Routes = [
  {
    path: '',
    component: SalvarPaisPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalvarPaisPage],
    providers: [AngularFireAuth]
})
export class SalvarPaisPageModule {}
