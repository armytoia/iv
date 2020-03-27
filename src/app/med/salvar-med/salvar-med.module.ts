import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import { IonicModule } from '@ionic/angular';

import { SalvarMedPage } from './salvar-med.page';

const routes: Routes = [
  {
    path: '',
    component: SalvarMedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SalvarMedPage],
    providers: [AngularFireAuth]
})
export class SalvarMedPageModule {}
