import { Component, OnInit } from '@angular/core';
import { Cidade } from 'src/app/cidade';
import { Observable } from 'rxjs';
import { Estado } from 'src/app/estado';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-salvar-cidade',
  templateUrl: './salvar-cidade.page.html',
  styleUrls: ['./salvar-cidade.page.scss'],
})
export class SalvarCidadePage implements OnInit {

  cidade: Cidade = new Cidade();
  listaEstado: Observable<Estado[]>;
  constructor(private fire: AngularFireDatabase, private rota: Router) {
    this.listaEstado = this.fire.list<Estado>('estado').snapshotChanges().pipe(

      map(lista => lista.map(linha => ({ key: linha.payload.key, ...linha.payload.val() })))

    );
  }
  ngOnInit() { }
  salvar() {
    this.fire.list('cidade').push(this.cidade);
    this.cidade = new Cidade();
    this.rota.navigate(['/']);
  }
}
