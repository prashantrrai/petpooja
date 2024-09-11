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
  // title = 'Discover the Best Restaurants';
  // searchQuery = '';
  bannerImage = 'https://graphicsfamily.com/wp-content/uploads/edd/2023/09/Restaurant-food-menu-web-banner-template-scaled.jpg';


  restaurants = [
    {
      id: 1,
      name: 'The Grand Thakkar',
      rating: 4.5,
      feedback: 'Great food, cozy atmosphere!',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYTVpeVi7Btg-BXjEAQtg3Xuln11xmtr3p3HX9V2wiDfXu4-T2UEu6UbcZD0fJSG6biW4&usqp=CAU'
    },
    {
      id: 2,
      name: 'Guru Krupa Hotel',
      rating: 4.0,
      feedback: 'Excellent service!',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXsfyJNBLjamFbkjPvgz84tS1kXjrW4UtB1w&s'
    },
    {
      id: 3,
      name: 'La Pino\'z Pizza',
      rating: 4.0,
      feedback: 'Best Pizza & service both',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToTsn6g4wVCs1KgTpt9TwuHpZnqtfBrzJ8zA&s'
    },
    {
      id: 4,
      name: 'Tandoor Treats',
      rating: 4.6,
      feedback: 'Authentic tandoori dishes, a must-try for spice lovers!',
      image: 'https://www.tandooritreats.com/img/curry_1740075785.jpg'
    },
    {
      id: 5,
      name: 'Maharaja Dhaba',
      rating: 4.7,
      feedback: 'Delicious North Indian cuisine, wonderful ambiance.',
      image: 'https://content.jdmagicbox.com/comp/karad/c3/9999p2164.2164.190911140649.c8c3/catalogue/maharaj-dhaba-karad-ys8fkmrvku.jpg'
    },
    {
      id: 6,
      name: 'Spice Bazaar',
      rating: 4.3,
      feedback: 'Great mix of Indian and Continental dishes.',
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/11/06/d0/65/food-at-the-spice-bazaar.jpg'
    },
    {
      id: 7,
      name: 'Chutney Chowk',
      rating: 4.2,
      feedback: 'Street food delights with a modern twist!',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxb0vhwrUnTSENHTZxMnOC_O7uwNCDDipB8g&s'
    },
    {
      id: 8,
      name: 'Swadisht Bhojanalay',
      rating: 4.8,
      feedback: 'Home-cooked style meals at affordable prices.',
      image: 'https://daijiworld.ap-south-1.linodeobjects.com/iWeb/daijiworld/images3/rayan_150821_Food18.jpg'
    },
    {
      id: 9,
      name: 'Royal Biryani',
      rating: 4.5,
      feedback: 'Biryani with rich, authentic flavors, generous portions.',
      image: 'https://miro.medium.com/v2/resize:fit:513/1*NmiahIDhJPTo_so6PwOCEA.png'
    },
    {
      id: 10,
      name: 'Chaat House',
      rating: 4.0,
      feedback: 'Delicious chaats and street snacks.',
      image: 'https://www.todaystraveller.net/wp-content/uploads/2021/05/IMG_0349-2-1024x768.jpeg'
    },
    {
      id: 11,
      name: 'Mumbai Masala',
      rating: 4.4,
      feedback: 'Flavors of Mumbai, from pav bhaji to vada pav!',
      image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/10/vada-pav.jpg'
    },
    {
      id: 12,
      name: 'Punjabi Express',
      rating: 4.6,
      feedback: 'Hearty Punjabi dishes with bold flavors and great service.',
      image: 'https://www.todaystraveller.net/wp-content/uploads/2024/05/Amritsari-Kulcha-2_edit-1024x683.jpg'
    }
  ];



  testimonials = [
    { text: 'Petpooja helped me find my favorite local restaurant!', name: 'Vikash Patel' },
    { text: 'Great platform for discovering new places & Taste!', name: 'Prince Yadav' },
    { text: 'Delicious food, excellent service, and great ambiance. Will return!', name: 'Rajesh Patel' },
    { text: 'Quick service, mouthwatering dishes, and reasonable prices. Highly recommend.', name: 'Anjali Desai' },
    { text: 'Perfectly cooked meals, good portion sizes, and polite staff.', name: 'Akshar Soni' },
    { text: 'Authentic flavors, beautiful presentation, and attentive service. Highly recommend you guys must visit', name: 'Rahul Joshi' },
  ];

  // search() {
  //   console.log('Searching for:', this.searchQuery);
  //   // Implement search functionality here
  // }
}
