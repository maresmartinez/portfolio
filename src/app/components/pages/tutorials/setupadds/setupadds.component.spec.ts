import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupaddsComponent } from './setupadds.component';

describe('SetupaddsComponent', () => {
  let component: SetupaddsComponent;
  let fixture: ComponentFixture<SetupaddsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupaddsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupaddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
