import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'salvar-pais', loadChildren: './pais/salvar-pais/salvar-pais.module#SalvarPaisPageModule' },
  { path: 'listar-pais', loadChildren: './pais/listar-pais/listar-pais.module#ListarPaisPageModule' },
  { path: 'salvar-aluno', loadChildren: './aluno/salvar-aluno/salvar-aluno.module#SalvarAlunoPageModule' },
  { path: 'listar-aluno', loadChildren: './aluno/listar-aluno/listar-aluno.module#ListarAlunoPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'salvar-estado', loadChildren: './estado/salvar-estado/salvar-estado.module#SalvarEstadoPageModule' },
  { path: 'listar-estado', loadChildren: './estado/listar-estado/listar-estado.module#ListarEstadoPageModule' },
  { path: 'salvar-turma', loadChildren: './turma/salvar-turma/salvar-turma.module#SalvarTurmaPageModule' },  { path: 'salvar-mensagem', loadChildren: './mensagem/salvar-mensagem/salvar-mensagem.module#SalvarMensagemPageModule' },
  { path: 'salvar-cidade', loadChildren: './cidade/salvar-cidade/salvar-cidade.module#SalvarCidadePageModule' },
  { path: 'listar-cidade', loadChildren: './cidade/listar-cidade/listar-cidade.module#ListarCidadePageModule' },
  { path: 'listar-turma', loadChildren: './turma/listar-turma/listar-turma.module#ListarTurmaPageModule' },
  { path: 'listar-mensagem', loadChildren: './mensagem/listar-mensagem/listar-mensagem.module#ListarMensagemPageModule' },
  { path: 'chat', loadChildren: './chat/chat.module#ChatPageModule' },
  { path: 'room', loadChildren: './room/room.module#RoomPageModule' },
  { path: 'add-room', loadChildren: './add-room/add-room.module#AddRoomPageModule' },
  { path: 'inicio-chat', loadChildren: './inicio-chat/inicio-chat.module#InicioChatPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
