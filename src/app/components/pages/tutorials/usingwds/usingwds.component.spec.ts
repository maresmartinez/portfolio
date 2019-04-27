import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingwdsComponent } from './usingwds.component';

describe('UsingwdsComponent', () => {
  let component: UsingwdsComponent;
  let fixture: ComponentFixture<UsingwdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingwdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingwdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
