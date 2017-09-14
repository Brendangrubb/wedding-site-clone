import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsvpReceivedComponent } from './rsvp-received.component';

describe('RsvpReceivedComponent', () => {
  let component: RsvpReceivedComponent;
  let fixture: ComponentFixture<RsvpReceivedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsvpReceivedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsvpReceivedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
