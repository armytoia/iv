import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarMedPage } from './salvar-med.page';

describe('SalvarMedPage', () => {
  let component: SalvarMedPage;
  let fixture: ComponentFixture<SalvarMedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalvarMedPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarMedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
