import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectoverviewlistComponent } from './projectoverviewlist.component';

describe('ProjectoverviewlistComponent', () => {
  let component: ProjectoverviewlistComponent;
  let fixture: ComponentFixture<ProjectoverviewlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectoverviewlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectoverviewlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
