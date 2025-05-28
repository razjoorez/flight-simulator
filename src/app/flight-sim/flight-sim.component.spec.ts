import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightSimComponent } from './flight-sim.component';

describe('FlightSimComponent', () => {
  let component: FlightSimComponent;
  let fixture: ComponentFixture<FlightSimComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlightSimComponent]
    });
    fixture = TestBed.createComponent(FlightSimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
