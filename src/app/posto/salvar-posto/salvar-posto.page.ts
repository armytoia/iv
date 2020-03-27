import { Component, OnInit } from '@angular/core';
import { Posto } from '../entidade/posto';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import { ListarPostoPage } from '../listar-posto/listar-posto.page';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Turma } from '../../turma/entidade/turma';

@Component({
  selector: 'app-salvar-posto',
  templateUrl: './salvar-posto.page.html',
  styleUrls: ['./salvar-posto.page.scss'],
})
export class SalvarPostoPage implements OnInit {
  posto: Posto = new Posto();
  total: number;
  resultado: number;
  listaTurma: Observable<Turma[]>;

  constructor(private banco: AngularFireDatabase, private router: Router, private modal: ModalController, public popoverController: PopoverController) {
    this.listaTurma = this.banco.list<Turma>('turma').snapshotChanges().pipe(//busca
      map(lista => lista.map(linha => ({
        key: linha.payload.key, ...linha.payload.val()// seja formatado pela chave e pelo valor
      })))
    );
  }

  /*async tela(ev: any) {
    const popover = await this.popoverController.create({
      component: ListarAlunoPage,
      event: ev,
      translucent: true
    });

    return await popover.present();
  }*/
  ngOnInit() {
  }
  salvar(): void {
    if (this.posto.key == null) {
      this.banco.list('posto').push(this.posto);
      this.posto = new Posto();
      this.router.navigate(['listar-med']);
    }
    else {
      this.banco.object('posto/' + this.posto.key).update(this.posto);
      this.modal.dismiss();
    }
  }
}
