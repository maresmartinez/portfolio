import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportoverviewlistComponent } from './reportoverviewlist.component';

describe('ReportoverviewlistComponent', () => {
  let component: ReportoverviewlistComponent;
  let fixture: ComponentFixture<ReportoverviewlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportoverviewlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportoverviewlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
