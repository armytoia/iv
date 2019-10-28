import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarAlunoPage } from './salvar-aluno.page';

describe('SalvarAlunoPage', () => {
  let component: SalvarAlunoPage;
  let fixture: ComponentFixture<SalvarAlunoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalvarAlunoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarAlunoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
