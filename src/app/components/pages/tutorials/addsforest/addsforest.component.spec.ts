import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsforestComponent } from './addsforest.component';

describe('AddsforestComponent', () => {
  let component: AddsforestComponent;
  let fixture: ComponentFixture<AddsforestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsforestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsforestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
