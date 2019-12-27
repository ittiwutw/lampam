import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveDetailPage } from './live-detail.page';

describe('LiveDetailPage', () => {
  let component: LiveDetailPage;
  let fixture: ComponentFixture<LiveDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
