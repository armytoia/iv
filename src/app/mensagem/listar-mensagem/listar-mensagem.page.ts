import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';
import * as _ from 'lodash';
import { PopoverController } from '@ionic/angular';
import { Mensagem } from '../entidade/mensagem';

@Component({
  selector: 'app-listar-mensagem',
  templateUrl: './listar-mensagem.page.html',
  styleUrls: ['./listar-mensagem.page.scss'],
})
export class ListarMensagemPage implements OnInit {

  listaMensagem: Observable<Mensagem[]>;
  items: Observable<Mensagem[]>;
  listaFiltro: Mensagem[];
  filtro = {}; //regras ativas do filtro
  alunos: any;
  valor: string;
  constructor(private fire: AngularFireDatabase,  private modal: ModalController, public popoverController: PopoverController) {
    this.listaMensagem = this.fire.list<Mensagem>('mensagem').snapshotChanges().pipe(//busca
      map(lista => lista.map(linha => ({
        key: linha.payload.key, ...linha.payload.val()// seja formatado pela chave e pelo valor
      })))
    );//ira guardar esses contatos(lista), o fire tem os metodos necessarios para listar, e converter os dados para contato, configurando ela em linha(chave)
  }
  ngOnInit() {
    this.listaMensagem.subscribe(aluno => {
          this.alunos = aluno;
          this.listaFiltro = _.filter(this.alunos, _.conforms(this.filtro));
  })
  }
  excluir(key){
    this.fire.list('mensagem').remove(key);
    alert("excluida da lista");
  }
  filtrar(){
    this.filtro['campo3'] = val => val.includes(this.valor);
    this.listaFiltro = _.filter(this.alunos, _.conforms(this.filtro));
  }
}
