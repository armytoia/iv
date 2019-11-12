import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarMensagemPage } from './listar-mensagem.page';

describe('ListarMensagemPage', () => {
  let component: ListarMensagemPage;
  let fixture: ComponentFixture<ListarMensagemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarMensagemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarMensagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
