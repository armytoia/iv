import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarPaisPage } from './salvar-pais.page';

describe('SalvarPaisPage', () => {
  let component: SalvarPaisPage;
  let fixture: ComponentFixture<SalvarPaisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalvarPaisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarPaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
