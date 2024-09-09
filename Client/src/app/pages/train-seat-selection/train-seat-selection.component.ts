import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-train-seat-selection',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './train-seat-selection.component.html',
  styleUrl: './train-seat-selection.component.css'
})
export class TrainSeatSelectionComponent {
  isTrainMoving: boolean = true;
  showModal: boolean = false;

  seatsA = [
    { label: 'A1', status: 'available' },
    { label: 'A2', status: 'available' },
    { label: 'A3', status: 'available' },
    { label: 'A4', status: 'available' },
    { label: 'A5', status: 'unavailable' },
    { label: 'A6', status: 'available' }
  ];

  seatsB = [
    { label: 'B1', status: 'available' },
    { label: 'B2', status: 'available' },
    { label: 'B3', status: 'available' },
    { label: 'B4', status: 'available' },
    { label: 'B5', status: 'unavailable' },
    { label: 'B6', status: 'available' }
  ];


  constructor(private router: Router) { }

  pauseTrain() {
    this.isTrainMoving = false;
  }

  resumeTrain() {
    this.isTrainMoving = true;
  }

  selectSeat(seat: any) {
    if (this.isTrainMoving || seat.status === 'unavailable') return;
    seat.status = seat.status === 'selected' ? 'available' : 'selected';
  }

  // confirmSelection() {
  //   this.showModal = true;
  // }

  // onConfirm(result: boolean) {
  //   this.showModal = false;
  //   if (result) {
  //     console.log('Booking confirmed');
  //   } else {
  //     console.log('Booking cancelled');
  //   }
  // }

  // onConfirm() {
  //   console.log('Booking confirmed');
  // }

  onConfirm() {
    const isSeatSelected = this.seatsA.concat(this.seatsB).some(seat => seat.status === 'selected');

    if (!isSeatSelected) {
      alert('Please select a seat before proceeding.');
      return;
    }

    // Proceed to booking if a seat is selected
    console.log('Booking confirmed');
    this.router.navigate(['/booking']);
  }
}
