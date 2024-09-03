import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-restaurant-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './restaurant-detail.component.html',
  styleUrl: './restaurant-detail.component.css'
})
export class RestaurantDetailComponent {
  restaurant = {
    name: 'Guru Krupa Hotel',
    description: 'A brief description of the restaurant goes here.',
    details: [
      { label: 'Prices', value: 'Average meal cost: $20 - $50' },
      { label: 'Timings', value: 'Open: 10 AM - 11 PM' },
      { label: 'Rating', value: '4.5/5 based on 120 reviews' },
      { label: 'Feedback', value: '“Great ambiance and excellent food. Will visit again!”' }
    ]
  };
}
