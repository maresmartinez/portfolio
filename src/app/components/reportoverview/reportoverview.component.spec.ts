import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportoverviewComponent } from './reportoverview.component';

describe('ReportoverviewComponent', () => {
  let component: ReportoverviewComponent;
  let fixture: ComponentFixture<ReportoverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportoverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
