import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleriesPage } from './galleries.page';

describe('GalleriesPage', () => {
  let component: GalleriesPage;
  let fixture: ComponentFixture<GalleriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleriesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
