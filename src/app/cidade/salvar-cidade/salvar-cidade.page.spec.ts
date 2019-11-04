import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarCidadePage } from './salvar-cidade.page';

describe('SalvarCidadePage', () => {
  let component: SalvarCidadePage;
  let fixture: ComponentFixture<SalvarCidadePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalvarCidadePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarCidadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
