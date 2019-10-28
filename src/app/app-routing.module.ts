import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'login-aluno', loadChildren: './login-aluno/login-aluno.module#LoginAlunoPageModule' },
  { path: 'salvar-servidor', loadChildren: './servidor/salvar-servidor/salvar-servidor.module#SalvarServidorPageModule' },
  { path: 'listar-servidor', loadChildren: './servidor/listar-servidor/listar-servidor.module#ListarServidorPageModule' },
  { path: 'salvar-pais', loadChildren: './pais/salvar-pais/salvar-pais.module#SalvarPaisPageModule' },
  { path: 'listar-pais', loadChildren: './pais/listar-pais/listar-pais.module#ListarPaisPageModule' },
  { path: 'salvar-aluno', loadChildren: './aluno/salvar-aluno/salvar-aluno.module#SalvarAlunoPageModule' },
  { path: 'listar-aluno', loadChildren: './aluno/listar-aluno/listar-aluno.module#ListarAlunoPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'salvar-estado', loadChildren: './estado/salvar-estado/salvar-estado.module#SalvarEstadoPageModule' },
  { path: 'listar-estado', loadChildren: './estado/listar-estado/listar-estado.module#ListarEstadoPageModule' },
  { path: 'salvar-turma', loadChildren: './turma/salvar-turma/salvar-turma.module#SalvarTurmaPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
