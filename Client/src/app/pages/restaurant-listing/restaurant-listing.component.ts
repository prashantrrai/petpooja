import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-restaurant-listing',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './restaurant-listing.component.html',
  styleUrl: './restaurant-listing.component.css'
})
export class RestaurantListingComponent {

  restaurants = [
    {
      id: 1,
      name: 'The Grand Thakkar',
      rating: 4.5,
      description: 'A refined dining experience with a wide range of Indian delicacies.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYTVpeVi7Btg-BXjEAQtg3Xuln11xmtr3p3HX9V2wiDfXu4-T2UEu6UbcZD0fJSG6biW4&usqp=CAU'
    },
    {
      id: 2,
      name: 'Guru Krupa Hotel',
      rating: 4.0,
      description: 'Traditional South Indian fare with a focus on authentic flavors.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXsfyJNBLjamFbkjPvgz84tS1kXjrW4UtB1w&s'
    },
    {
      id: 3,
      name: 'La Pino\'z Pizza',
      rating: 4.0,
      description: 'Delicious pizzas with a variety of toppings and a cozy ambiance.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToTsn6g4wVCs1KgTpt9TwuHpZnqtfBrzJ8zA&s'
    },
    {
      id: 4,
      name: 'Tandoor Treats',
      rating: 4.6,
      description: 'Authentic tandoori dishes with a rich, spicy flavor profile.',
      image: 'https://www.tandooritreats.com/img/curry_1740075785.jpg'
    },
    {
      id: 5,
      name: 'Maharaja Dhaba',
      rating: 4.7,
      description: 'North Indian cuisine with generous portions and a royal touch.',
      image: 'https://content.jdmagicbox.com/comp/karad/c3/9999p2164.2164.190911140649.c8c3/catalogue/maharaj-dhaba-karad-ys8fkmrvku.jpg'
    },
    {
      id: 6,
      name: 'Spice Bazaar',
      rating: 4.3,
      description: 'A vibrant mix of Indian and Continental dishes for varied tastes.',
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/11/06/d0/65/food-at-the-spice-bazaar.jpg'
    },
    {
      id: 7,
      name: 'Chutney Chowk',
      rating: 4.2,
      description: 'Modern takes on classic street food with a fresh, innovative twist.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxb0vhwrUnTSENHTZxMnOC_O7uwNCDDipB8g&s'
    },
    {
      id: 8,
      name: 'Swadisht Bhojanalay',
      rating: 4.8,
      description: 'Comfort food with home-cooked flavors at budget-friendly prices.',
      image: 'https://daijiworld.ap-south-1.linodeobjects.com/iWeb/daijiworld/images3/rayan_150821_Food18.jpg'
    },
    {
      id: 9,
      name: 'Royal Biryani',
      rating: 4.5,
      description: 'Rich, flavorful biryanis with generous portions and aromatic spices.',
      image: 'https://miro.medium.com/v2/resize:fit:513/1*NmiahIDhJPTo_so6PwOCEA.png'
    },
    {
      id: 10,
      name: 'Chaat House',
      rating: 4.0,
      description: 'A variety of chaats and street snacks that are both delicious and satisfying.',
      image: 'https://www.todaystraveller.net/wp-content/uploads/2021/05/IMG_0349-2-1024x768.jpeg'
    },
    {
      id: 11,
      name: 'Mumbai Masala',
      rating: 4.4,
      description: 'Mumbai-style street food, from vada pav to pav bhaji, bursting with flavor.',
      image: 'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/10/vada-pav.jpg'
    },
    {
      id: 12,
      name: 'Punjabi Express',
      rating: 4.6,
      description: 'Hearty Punjabi dishes known for bold flavors and excellent service.',
      image: 'https://www.todaystraveller.net/wp-content/uploads/2024/05/Amritsari-Kulcha-2_edit-1024x683.jpg'
    }
  ];


}
