import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarOpcaoPage } from './salvar-opcao.page';

describe('SalvarOpcaoPage', () => {
  let component: SalvarOpcoesPage;
  let fixture: ComponentFixture<SalvarOpcaoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalvarOpcaoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarOpcaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
