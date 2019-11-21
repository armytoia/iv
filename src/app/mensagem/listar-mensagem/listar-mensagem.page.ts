import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';
import * as _ from 'lodash';
import { PopoverController } from '@ionic/angular';
import { Mensagem } from '../entidade/mensagem';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { SalvarMensagemComponent } from '../salvar-mensagem/salvar-mensagem.component';

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
  mensagens: any;
  valor: string;
  constructor(private fire: AngularFireDatabase,  private modal: ModalController, public popoverController: PopoverController, private afAuth: AngularFireAuth, private router: Router) {
    this.listaMensagem = this.fire.list<Mensagem>('mensagem').snapshotChanges().pipe(//busca
      map(lista => lista.map(linha => ({
        key: linha.payload.key, ...linha.payload.val()// seja formatado pela chave e pelo valor
      })))
    );//ira guardar esses contatos(lista), o fire tem os metodos necessarios para listar, e converter os dados para contato, configurando ela em linha(chave)
  }
  ngOnInit() {
    this.listaMensagem.subscribe(mensagem => {
          this.mensagens = mensagem;
          this.listaFiltro = _.filter(this.mensagens, _.conforms(this.filtro));
  })
  }
  excluir(key){
    this.fire.list('mensagem').remove(key);
    alert("excluida da lista");
  }
  filtrar(){
    this.filtro['campo3'] = val => val.includes(this.valor);
    this.listaFiltro = _.filter(this.mensagens, _.conforms(this.filtro));
  }
  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['home']);
  }
  async alterar(entidade) {
    const tela = await this.modal.create({
      component: SalvarMensagemComponent, componentProps: { mensagem: entidade }
    });
    tela.present();
  }
}
