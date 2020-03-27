import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';
import * as _ from 'lodash';
import { PopoverController } from '@ionic/angular';
import { Posto } from '../entidade/posto';
import { SalvarPostoPage } from '../salvar-posto/salvar-posto.page';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-posto',
  templateUrl: './listar-posto.page.html',
  styleUrls: ['./listar-posto.page.scss'],
})
export class ListaPostoPage implements OnInit {
  listaPosto: Observable<Posto[]>;
  items: Observable<Posto[]>;
  listaFiltro: Posto[];
  filtro = {}; //regras ativas do filtro
  postos: any;
  valor: string;
  constructor(private afAuth: AngularFireAuth, private fire: AngularFireDatabase,  private modal: ModalController, public popoverController: PopoverController, private router: Router) {
    this.listaPosto = this.fire.list<Aluno>('posto').snapshotChanges().pipe(//busca
      map(lista => lista.map(linha => ({
        key: linha.payload.key, ...linha.payload.val()// seja formatado pela chave e pelo valor
      })))
    );//ira guardar esses contatos(lista), o fire tem os metodos necessarios para listar, e converter os dados para contato, configurando ela em linha(chave)
  }
  ngOnInit() {
    this.listaPosto.subscribe(posto => {
          this.postos = posto;
          this.listaFiltro = _.filter(this.postos, _.conforms(this.filtro));
  })
  }
  excluir(key){
    this.fire.list('posto').remove(key);
    alert("excluido da lista");
  }
  async alterar(entidade) {
    const tela = await this.modal.create({
      component: SalvarPostoPage, componentProps: { posto: entidade }
    });
    tela.present();
  }
  filtrar(){
    this.filtro['end'] = val => val.includes(this.valor);
    this.listaFiltro = _.filter(this.postos, _.conforms(this.filtro));
  }
  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['home']);
  }

  }
