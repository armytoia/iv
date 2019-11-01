import { Component, OnInit } from '@angular/core';
import { Aluno } from '../entidade/aluno';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-salvar-aluno',
  templateUrl: './salvar-aluno.page.html',
  styleUrls: ['./salvar-aluno.page.scss'],
})
export class SalvarAlunoPage implements OnInit {
  aluno: Aluno = new Aluno();
  total: number;
  resultado: number;

  constructor(private banco: AngularFireDatabase, private router: Router, private modal: ModalController, public popoverController: PopoverController) { }

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
