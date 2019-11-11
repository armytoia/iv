import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import { Pais } from '../entidade/pais';
import { Cidade } from 'src/app/cidade';
import { Estado } from 'src/app/estado';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-salvar-pais',
  templateUrl: './salvar-pais.page.html',
  styleUrls: ['./salvar-pais.page.scss'],
})
export class SalvarPaisPage implements OnInit {

  pais: Pais = new Pais();
  listaCidade: Observable<Cidade[]>;
  listaEstado: Observable<Estado[]>;
  constructor(private afAuth: AngularFireAuth, private router: Router, private fire: AngularFireDatabase) {
    this.listaCidade = this.fire.list<Cidade>('cidade').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))

    );
    this.listaEstado = this.fire.list<Estado>('estado').snapshotChanges().pipe(
      map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))

    );
  }
  ngOnInit() { }
  cadastrar() {
    this.afAuth.auth.createUserWithEmailAndPassword(this.pais.email, this.pais.senha).then(
      () => { this.router.navigate(['salvar-aluno']); }
    ).catch((erro) => console.log(erro));
  }
}
