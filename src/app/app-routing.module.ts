import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SalvarMensagemComponent } from './mensagem/salvar-mensagem/salvar-mensagem.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'salvar-med', loadChildren: './med/salvar-med/salvar-med.module#SalvarMedPageModule' },
  { path: 'listar-med', loadChildren: './med/listar-med/listar-med.module#ListarMedPageModule' },
  { path: 'salvar-posto', loadChildren: './posto/salvar-posto/salvar-posto.module#SalvarPostoPageModule' },
  { path: 'listar-posto', loadChildren: './posto/listar-posto/listar-posto.module#ListarPostoPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'salvar-estado', loadChildren: './estado/salvar-estado/salvar-estado.module#SalvarEstadoPageModule' },
  { path: 'listar-estado', loadChildren: './estado/listar-estado/listar-estado.module#ListarEstadoPageModule' },
  { path: 'salvar-turma', loadChildren: './turma/salvar-turma/salvar-turma.module#SalvarTurmaPageModule' },
  { path: 'salvar-opcao', loadChildren: './opcao/salvar-opcao/salvar-opcao.module#SalvarOpcaoPageModule' },
  { path: 'listar-opcao', loadChildren: './opcao/listar-opcao/listar-opcao.module#ListarOpcaoPageModule' },
  { path: 'listar-turma', loadChildren: './turma/listar-turma/listar-turma.module#ListarTurmaPageModule' },
  { path: 'listar-mensagem', loadChildren: './mensagem/listar-mensagem/listar-mensagem.module#ListarMensagemPageModule' },
  { path: 'salvar-mensagem', component: SalvarMensagemComponent},
//  { path: 'chat', loadChildren: './chat/chat.module#ChatPageModule' },
  { path: 'inicio', loadChildren: './chat/inicio/inicio.module#InicioPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
