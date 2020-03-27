import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPostoPage } from './listar-posto.page';

describe('ListarPostoPage', () => {
  let component: ListarPostoPage;
  let fixture: ComponentFixture<ListarAlunoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPostoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPostoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
