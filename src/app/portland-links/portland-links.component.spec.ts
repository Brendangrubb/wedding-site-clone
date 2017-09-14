import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortlandLinksComponent } from './portland-links.component';

describe('PortlandLinksComponent', () => {
  let component: PortlandLinksComponent;
  let fixture: ComponentFixture<PortlandLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortlandLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortlandLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
