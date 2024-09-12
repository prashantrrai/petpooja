import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../components/confirmation-dialog/confirmation-dialog.component';
import { OrderPlacedDialogComponent } from '../../components/order-placed-dialog/order-placed-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-details-booking',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './customer-details-booking.component.html',
  styleUrl: './customer-details-booking.component.css'
})
export class CustomerDetailsBookingComponent implements OnInit {
  restaurantId!: string | null;
  seatsArray!: string | null;
  orderId!: string | null;
  bookingForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.restaurantId = this.route.snapshot.queryParamMap.get('id');
    this.seatsArray = this.route.snapshot.queryParamMap.get('seats');
    this.orderId = this.route.snapshot.queryParamMap.get('orderId');

    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      date: ['', Validators.required],
      time: ['', Validators.required],
      persons: ['', [Validators.required, Validators.min(1), Validators.max(10)]]
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: { message: 'Do you confirm the booking?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Confirmed');
        this.dialog.open(OrderPlacedDialogComponent);
      } else {
        console.log('Cancelled');
      }
    });
  }

  submitBooking(): void {
    if (this.bookingForm.valid) {
      const bookingDetails = {
        restaurantId: this.restaurantId,
        seat: this.seatsArray,
        orderId: this.orderId,
        customer: this.bookingForm.value
      };

      console.log('Booking Details:', bookingDetails);

      // Navigate to order history page with booking details
      this.router.navigate(['/order/history'], {
        state: { bookingDetails }
      });

      this.dialog.open(OrderPlacedDialogComponent);
    } else {
      alert('Please fill out the form correctly.');
    }
  }
}
