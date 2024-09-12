import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Restaurant } from '../../models/restaurant.model';
import { RestaurantService } from '../../services/restaurant.service';
// import { Restaurant } from '../../models/restaurant.js';

@Component({
  selector: 'app-restaurant-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './restaurant-detail.component.html',
  styleUrl: './restaurant-detail.component.css'
})
export class RestaurantDetailComponent implements OnInit {
  restaurantId: number | undefined;
  restaurant: Restaurant | undefined;

  constructor(private route: ActivatedRoute, private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.restaurantId = +id;

      this.restaurant = this.restaurantService.getRestaurantById(this.restaurantId);

      if (!this.restaurant) {
        console.error(`Restaurant with ID ${this.restaurantId} not found`);
      }
    }

  }
}
