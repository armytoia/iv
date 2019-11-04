import { Component, OnInit } from '@angular/core';
import { Turma } from '../entidade/turma';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-salvar-turma',
  templateUrl: './salvar-turma.page.html',
  styleUrls: ['./salvar-turma.page.scss'],
})
export class SalvarTurmaPage implements OnInit {
  turma: Turma = new Turma();
  constructor(private banco: AngularFireDatabase) { }

  ngOnInit() {
  }
  salvar() {
    this.banco.list('turma').push(this.turma);
    this.turma = new Turma();
    alert('salvo com sucesso!');
  }
}
