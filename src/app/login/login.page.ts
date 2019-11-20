import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import { Router } from '@angular/router';
import { Pais } from '../pais/entidade/pais';
import { Routes } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  pais: Pais = new Pais();
 constructor(private afAuth: AngularFireAuth, private router: Router, public nav: NavController, public fs: AngularFirestore) { }
 entrar() {
   this.afAuth.auth.signInWithEmailAndPassword(this.pais.email, this.pais.senha).then(
     () => { localStorage.setItem('userid', this.afAuth.auth.currentUser.uid);
     this.afAuth.auth.currentUser.updateProfile({
       displayName: this.pais.nome,
       photoURL: ''
     }).then(() => {
       this.nav.navigateRoot('/inicio');
     }).catch(err => {
       alert(err.message)
     })
   }).catch(err => {
       alert(err.message)
    })
   }


  ngOnInit() {
  }
  mudar(){
    alert('verifique seu email');
    this.afAuth.auth.sendPasswordResetEmail(this.pais.email).then(()=> alert('verifique seu email')); {this.router.navigate([]);}
  }
}
