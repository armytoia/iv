import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioChatPage } from './inicio-chat.page';

describe('InicioChatPage', () => {
  let component: InicioChatPage;
  let fixture: ComponentFixture<InicioChatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioChatPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioChatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
