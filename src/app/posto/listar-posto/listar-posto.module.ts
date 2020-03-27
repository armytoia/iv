import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { ListarPostoPage } from './listar-posto.page';

const routes: Routes = [
  {
    path: '',
    component: ListarPostoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListarPostoPage],
  providers:[AngularFireAuth],
})
export class ListarPostoPageModule {}
