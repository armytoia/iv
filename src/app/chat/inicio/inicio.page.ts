import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { SalvarPaisPage } from 'src/app/pais/salvar-pais/salvar-pais.page';
import { SalvarAlunoPage } from 'src/app/aluno/salvar-aluno/salvar-aluno.page';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(public popoverController: PopoverController, private afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }
  async tela(ev: any) {
      const popover = await this.popoverController.create({
        component: SalvarPaisPage,
        event: ev,
        translucent: true
      });
      return await popover.present();
    }
    async telaa(ev: any) {
        const popover = await this.popoverController.create({
          component: SalvarAlunoPage,
          event: ev,
          translucent: true
        });
        return await popover.present();
      }
      logout() {
        this.afAuth.auth.signOut();
        this.router.navigate(['home']);
      }

}
