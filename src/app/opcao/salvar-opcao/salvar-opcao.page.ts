import { Component, OnInit } from '@angular/core';
import { Opcao } from 'src/app/opcao';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-salvar-opcao',
  templateUrl: './salvar-opcao.page.html',
  styleUrls: ['./salvar-opcao.page.scss'],
})
export class SalvarOpcaoPage implements OnInit {


  ngOnInit() { }
}
