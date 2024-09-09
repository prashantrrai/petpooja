import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../components/confirmation-dialog/confirmation-dialog.component';
import { OrderPlacedDialogComponent } from '../../components/order-placed-dialog/order-placed-dialog.component';

@Component({
  selector: 'app-customer-details-booking',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './customer-details-booking.component.html',
  styleUrl: './customer-details-booking.component.css'
})
export class CustomerDetailsBookingComponent implements OnInit {
  bookingForm!: FormGroup;

  constructor(private fb: FormBuilder, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.bookingForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      date: ['', Validators.required],
      time: ['', Validators.required],
      persons: ['', [Validators.required, Validators.min(1), Validators.max(10)]]
    });
  }

  // onSubmit() {
  //   if (this.bookingForm.valid) {
  //     alert('Booking Submitted Successfully!');
  //     console.log(this.bookingForm.value);
  //   }
  // }


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

  // openDialog(): void {
  //   this.dialog.open(OrderConfirmationDialogComponent, {
  //     width: '300px',
  //   });
  // }
}
