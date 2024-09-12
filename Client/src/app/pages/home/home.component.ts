import { Restaurant } from './../../models/restaurant.model';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  bannerImage = 'https://graphicsfamily.com/wp-content/uploads/edd/2023/09/Restaurant-food-menu-web-banner-template-scaled.jpg';
  restaurants: any[] = [];

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.restaurants = this.restaurantService.getRestaurants().map(restaurant => {
      const ratingDetail = restaurant.details.find(detail => detail.label === 'Rating');
      const feedbackDetail = restaurant.details.find(detail => detail.label === 'Feedback');

      return {
        ...restaurant,
        rating: ratingDetail ? ratingDetail.value : 'N/A',
        feedback: feedbackDetail ? feedbackDetail.value : 'N/A'
      };
    });
  }

  testimonials = [
    { text: 'Petpooja helped me find my favorite local restaurant!', name: 'Vikash Patel' },
    { text: 'Great platform for discovering new places & Taste!', name: 'Prince Yadav' },
    { text: 'Delicious food, excellent service, and great ambiance. Will return!', name: 'Rajesh Patel' },
    { text: 'Quick service, mouthwatering dishes, and reasonable prices. Highly recommend.', name: 'Anjali Desai' },
    { text: 'Perfectly cooked meals, good portion sizes, and polite staff.', name: 'Akshar Soni' },
    { text: 'Authentic flavors, beautiful presentation, and attentive service. Highly recommend you guys must visit', name: 'Rahul Joshi' },
  ];
}
