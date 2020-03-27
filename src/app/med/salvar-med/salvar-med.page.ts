import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import { Med } from '../entidade/med';
import { Posto } from 'src/app/posto';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-salvar-med',
  templateUrl: './salvar-med.page.html',
  styleUrls: ['./salvar-med.page.scss'],
})
export class SalvarMedPage implements OnInit {

  med: Med = new Med();
  listaPosto: Observable<Posto[]>;

  constructor(private afAuth: AngularFireAuth, private router: Router, private fire: AngularFireDatabase) {
    this.listaPosto = this.fire.list<Estado>('posto').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))

    );
  }
  ngOnInit() { }
  cadastrar() {
    this.banco.list('med').push(this.med);
    this.med = new Med();
    alert('salvo com sucesso!');
  }
}
