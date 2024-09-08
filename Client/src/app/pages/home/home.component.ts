import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Discover the Best Restaurants';
  searchQuery = '';
  bannerImage = 'https://graphicsfamily.com/wp-content/uploads/edd/2023/09/Restaurant-food-menu-web-banner-template-scaled.jpg';

  restaurants = [
    { name: 'The Grand Thakkar', rating: 4.5, feedback: 'Great food, cozy atmosphere!', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYTVpeVi7Btg-BXjEAQtg3Xuln11xmtr3p3HX9V2wiDfXu4-T2UEu6UbcZD0fJSG6biW4&usqp=CAU' },
    { name: 'Guru Krupa Hotel', rating: 4.0, feedback: 'Excellent service!', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXsfyJNBLjamFbkjPvgz84tS1kXjrW4UtB1w&s' },
    { name: 'La Pino\'z Pizza', rating: 4.0, feedback: 'Excellent service!', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToTsn6g4wVCs1KgTpt9TwuHpZnqtfBrzJ8zA&s' },
  ];

  testimonials = [
    { text: 'Petpooja helped me find my favorite local restaurant!', name: 'John Doe' },
    { text: 'Great platform for discovering new places!', name: 'Jane Smith' },
  ];

  search() {
    console.log('Searching for:', this.searchQuery);
    // Implement search functionality here
  }
}
