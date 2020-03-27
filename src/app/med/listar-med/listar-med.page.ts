import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';
import * as _ from 'lodash';
import { PopoverController } from '@ionic/angular';
import { Med } from '../entidade/med';
import { SalvarMedPage } from '../salvar-med/salvar-med.page';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-med',
  templateUrl: './listar-med.page.html',
  styleUrls: ['./listar-med.page.scss'],
})
export class ListarMedPage implements OnInit {

  listaMed: Observable<Med[]>;
  items: Observable<Med[]>;
  listaFiltro: Med[];
  filtro = {}; //regras ativas do filtro
  meds: any;
  valor: string;
  constructor(private afAuth: AngularFireAuth, private fire: AngularFireDatabase,  private modal: ModalController, public popoverController: PopoverController, private router: Router) {
    this.listaPosto = this.fire.list<Aluno>('med').snapshotChanges().pipe(//busca
      map(lista => lista.map(linha => ({
        key: linha.payload.key, ...linha.payload.val()// seja formatado pela chave e pelo valor
      })))
    );//ira guardar esses contatos(lista), o fire tem os metodos necessarios para listar, e converter os dados para contato, configurando ela em linha(chave)
  }
  ngOnInit() {
    this.listaMed.subscribe(med => {
          this.meds = med;
          this.listaFiltro = _.filter(this.meds, _.conforms(this.filtro));
  })
  }
  excluir(key){
    this.fire.list('med').remove(key);
    alert("excluido da lista");
  }
  async alterar(entidade) {
    const tela = await this.modal.create({
      component: SalvarMedPage, componentProps: { med: entidade }
    });
    tela.present();
  }
  filtrar(){
    this.filtro['nome'] = val => val.includes(this.valor);
    this.listaFiltro = _.filter(this.meds, _.conforms(this.filtro));
  }
  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['home']);
  }

}
