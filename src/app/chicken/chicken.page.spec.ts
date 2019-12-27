import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickenPage } from './chicken.page';

describe('ChickenPage', () => {
  let component: ChickenPage;
  let fixture: ComponentFixture<ChickenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChickenPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChickenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
