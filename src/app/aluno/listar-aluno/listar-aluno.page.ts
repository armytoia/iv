import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';
import * as _ from 'lodash';
import { PopoverController } from '@ionic/angular';
import { Aluno } from '../entidade/aluno';
import { SalvarAlunoPage } from '../salvar-aluno/salvar-aluno.page';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-aluno',
  templateUrl: './listar-aluno.page.html',
  styleUrls: ['./listar-aluno.page.scss'],
})
export class ListarAlunoPage implements OnInit {
  listaAluno: Observable<Aluno[]>;
  items: Observable<Aluno[]>;
  listaFiltro: Aluno[];
  filtro = {}; //regras ativas do filtro
  alunos: any;
  valor: string;
  constructor(private afAuth: AngularFireAuth, private fire: AngularFireDatabase,  private modal: ModalController, public popoverController: PopoverController, private router: Router) {
    this.listaAluno = this.fire.list<Aluno>('aluno').snapshotChanges().pipe(//busca
      map(lista => lista.map(linha => ({
        key: linha.payload.key, ...linha.payload.val()// seja formatado pela chave e pelo valor
      })))
    );//ira guardar esses contatos(lista), o fire tem os metodos necessarios para listar, e converter os dados para contato, configurando ela em linha(chave)
  }
  ngOnInit() {
    this.listaAluno.subscribe(aluno => {
          this.alunos = aluno;
          this.listaFiltro = _.filter(this.alunos, _.conforms(this.filtro));
  })
  }
  excluir(key){
    this.fire.list('aluno').remove(key);
    alert("excluido da lista");
  }
  async alterar(entidade) {
    const tela = await this.modal.create({
      component: SalvarAlunoPage, componentProps: { aluno: entidade }
    });
    tela.present();
  }
  filtrar(){
    this.filtro['nome'] = val => val.includes(this.valor);
    this.listaFiltro = _.filter(this.alunos, _.conforms(this.filtro));
  }
  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['home']);
  }

  }
