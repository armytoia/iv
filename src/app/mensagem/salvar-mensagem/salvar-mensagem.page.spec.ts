import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarMensagemPage } from './salvar-mensagem.page';

describe('SalvarMensagemPage', () => {
  let component: SalvarMensagemPage;
  let fixture: ComponentFixture<SalvarMensagemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalvarMensagemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarMensagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
