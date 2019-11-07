import { Component, OnInit } from '@angular/core';
import { Aluno } from '../entidade/aluno';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import { ListarAlunoPage } from '../listar-aluno/listar-aluno.page';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Turma } from '../../turma/entidade/turma';

@Component({
  selector: 'app-salvar-aluno',
  templateUrl: './salvar-aluno.page.html',
  styleUrls: ['./salvar-aluno.page.scss'],
})
export class SalvarAlunoPage implements OnInit {
  aluno: Aluno = new Aluno();
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
    if (this.aluno.key == null) {
      this.banco.list('aluno').push(this.aluno);
      this.aluno = new Aluno();
      this.router.navigate(['listar-aluno']);
    }
    else {
      this.banco.object('aluno/' + this.aluno.key).update(this.aluno);
      this.modal.dismiss();
    }
  }
}
