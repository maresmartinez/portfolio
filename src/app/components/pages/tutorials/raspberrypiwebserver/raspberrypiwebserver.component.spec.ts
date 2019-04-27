import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaspberrypiwebserverComponent } from './raspberrypiwebserver.component';

describe('RaspberrypiwebserverComponent', () => {
  let component: RaspberrypiwebserverComponent;
  let fixture: ComponentFixture<RaspberrypiwebserverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaspberrypiwebserverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaspberrypiwebserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
