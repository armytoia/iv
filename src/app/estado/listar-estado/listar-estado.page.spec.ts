import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEstadoPage } from './listar-estado.page';

describe('ListarEstadoPage', () => {
  let component: ListarEstadoPage;
  let fixture: ComponentFixture<ListarEstadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarEstadoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEstadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
