import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import { Pais } from '../entidade/pais';

@Component({
  selector: 'app-salvar-pais',
  templateUrl: './salvar-pais.page.html',
  styleUrls: ['./salvar-pais.page.scss'],
})
export class SalvarPaisPage implements OnInit {

  pais: Pais = new Pais();
  constructor(private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() { }
  cadastrar() {
    this.afAuth.auth.createUserWithEmailAndPassword(this.pais.email, this.pais.senha).then(
      () => { this.router.navigate(['listar-aluno']); }
    ).catch((erro) => console.log(erro));
  }
}
