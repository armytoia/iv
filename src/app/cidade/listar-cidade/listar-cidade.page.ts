import { Component, OnInit } from '@angular/core';
import { Cidade } from '../entidade/cidade';
import { Estado } from '../../estado/entidade/estado';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';
import * as _ from 'lodash';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-listar-cidade',
  templateUrl: './listar-cidade.page.html',
  styleUrls: ['./listar-cidade.page.scss'],
})
export class ListarCidadePage implements OnInit {

  listaCidade: Observable<Cidade[]>;
    items: Observable<Cidade[]>;
  listaFiltro: Cidade[];
  filtro = {}; //regras ativas do filtro
  cidades: any;
  valor: string;
  constructor(private fire: AngularFireDatabase,  private modal: ModalController, public popoverController: PopoverController) {
    this.listaCidade = this.fire.list<Cidade>('cidade').snapshotChanges().pipe(//busca
      map(lista => lista.map(linha => ({
        key: linha.payload.key, ...linha.payload.val()// seja formatado pela chave e pelo valor
      })))
    );//ira guardar esses contatos(lista), o fire tem os metodos necessarios para listar, e converter os dados para contato, configurando ela em linha(chave)
  }
  ngOnInit() {
    this.listaCidade.subscribe(cidade => {
          this.cidades = cidade;
          this.listaFiltro = _.filter(this.cidades, _.conforms(this.filtro));
  })
  }
  excluir(key){
    this.fire.list('cidade').remove(key);
    alert("excluido da lista");
  }

  filtrar(){
    this.filtro['nome'] = val => val.includes(this.valor);
    this.listaFiltro = _.filter(this.cidades, _.conforms(this.filtro));
  }

}
