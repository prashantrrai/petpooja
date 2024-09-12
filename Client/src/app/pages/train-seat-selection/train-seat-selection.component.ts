import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-train-seat-selection',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './train-seat-selection.component.html',
  styleUrl: './train-seat-selection.component.css'
})
export class TrainSeatSelectionComponent implements OnInit {
  isTrainMoving: boolean = true;
  // showModal: boolean = false;
  restaurant: any;
  selectedSeats: string[] = [];

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


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private restaurantService: RestaurantService
  ) { }

  ngOnInit(): void {
    const restaurantId = this.route.snapshot.queryParamMap.get('id');

    if (restaurantId) {
      this.restaurant = this.restaurantService.getRestaurantById(+restaurantId);
    }
  }

  selectSeat(seat: any) {
    if (this.isTrainMoving || seat.status === 'unavailable') return;
    seat.status = seat.status === 'selected' ? 'available' : 'selected';

    if (seat.status === 'selected') {
      this.selectedSeats.push(seat.label);
    } else {
      this.selectedSeats = this.selectedSeats.filter(selectedSeat => selectedSeat !== seat.label);
    }
  }

  onConfirm() {
    if (this.selectedSeats.length === 0) {
      alert('Please select at least one seat before proceeding.');
      return;
    }

    this.router.navigate(['/booking'], {
      queryParams: {
        id: this.restaurant.id,
        seats: this.selectedSeats.join(','),
        orderId: this.generateOrderId()
      }
    });
  }

  generateOrderId(): string {
    return 'ORD-' + Math.floor(Math.random() * 1000000);
  }

  pauseTrain() {
    this.isTrainMoving = false;
  }

  resumeTrain() {
    this.isTrainMoving = true;
  }

}
