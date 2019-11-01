import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from '@angular/router';
import { Pais } from '../pais/entidade/pais';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  pais: Pais = new Pais();
 constructor(private afAuth: AngularFireAuth, private router: Router) { }
 entrar() {
   this.afAuth.auth.signInWithEmailAndPassword(this.pais.email, this.pais.senha).then(
     () => { this.router.navigate(['listar-aluno']); }
   ).catch((erro) => console.log(erro));
 }

 logout() {
   this.afAuth.auth.signOut();
   this.router.navigate(['home']);
 }
  ngOnInit() {
  }
  mudar(){
    alert('verifique seu email');
    this.afAuth.auth.sendPasswordResetEmail(this.pais.email).then(()=> alert('verifique seu email')); {this.router.navigate([]);}
  }
}
