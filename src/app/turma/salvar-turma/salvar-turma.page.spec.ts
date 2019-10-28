import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarTurmaPage } from './salvar-turma.page';

describe('SalvarTurmaPage', () => {
  let component: SalvarTurmaPage;
  let fixture: ComponentFixture<SalvarTurmaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalvarTurmaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarTurmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
