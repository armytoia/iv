import { Component, OnInit } from '@angular/core';
import { Estado } from '../entidade/estado';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-salvar-estado',
  templateUrl: './salvar-estado.page.html',
  styleUrls: ['./salvar-estado.page.scss'],
})
export class SalvarEstadoPage implements OnInit {

  estado: Estado = new Estado();
  constructor(private banco: AngularFireDatabase) { }

  ngOnInit() {
  }
  salvar() {
    this.banco.list('estado').push(this.estado);
    this.estado = new Estado();
    alert('salvo com sucesso!');
  }

}
