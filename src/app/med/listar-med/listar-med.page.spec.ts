import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPaisPage } from './listar-pais.page';

describe('ListarPaisPage', () => {
  let component: ListarPaisPage;
  let fixture: ComponentFixture<ListarPaisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPaisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
