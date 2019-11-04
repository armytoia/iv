import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCidadePage } from './listar-cidade.page';

describe('ListarCidadePage', () => {
  let component: ListarCidadePage;
  let fixture: ComponentFixture<ListarCidadePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarCidadePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCidadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
