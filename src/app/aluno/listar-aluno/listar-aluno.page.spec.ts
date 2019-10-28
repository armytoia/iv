import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAlunoPage } from './listar-aluno.page';

describe('ListarAlunoPage', () => {
  let component: ListarAlunoPage;
  let fixture: ComponentFixture<ListarAlunoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarAlunoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAlunoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
