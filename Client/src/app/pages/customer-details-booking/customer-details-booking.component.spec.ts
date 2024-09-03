import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailsBookingComponent } from './customer-details-booking.component';

describe('CustomerDetailsBookingComponent', () => {
  let component: CustomerDetailsBookingComponent;
  let fixture: ComponentFixture<CustomerDetailsBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerDetailsBookingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerDetailsBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
