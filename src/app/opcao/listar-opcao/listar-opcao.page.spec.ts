import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarOpcaoPage } from './listar-opcao.page';

describe('ListarOpcaoPage', () => {
  let component: ListarOpcaoPage;
  let fixture: ComponentFixture<ListarCidadePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarOpcaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarOpcaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
