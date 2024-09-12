import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-order-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-history.component.html',
  styleUrl: './order-history.component.css'
})
export class OrderHistoryComponent {
  orders = [
    {
      id: 1,
      restaurantId: 1,
      restaurantName: 'The Grand Thakkar',
      title: 'Order #12345',
      description: 'Delicious Italian meal with pasta, pizza, and dessert.',
      seatNumber: 'A12',
      date: '2024-08-18',
      timing: '1:30 PM',
      numberOfPersons: 1,
      customerName: 'John Doe',
      phoneNumber: '123-456-7890',
      status: 'Completed',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToTsn6g4wVCs1KgTpt9TwuHpZnqtfBrzJ8zA&s'
    },
    {
      id: 2,
      restaurantId: 2,
      restaurantName: 'Guru Krupa Hotel',
      title: 'Order #12346',
      description: 'Sushi and tempura with miso soup.',
      seatNumber: 'B5, B6',
      date: '2024-08-20',
      timing: '3:30 PM',
      numberOfPersons: 2,
      customerName: 'Jane Smith',
      phoneNumber: '987-654-3210',
      status: 'In Progress',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXsfyJNBLjamFbkjPvgz84tS1kXjrW4UtB1w&s'
    },
    {
      id: 3,
      restaurantId: 3,
      restaurantName: 'La Pino\'z Pizza',
      title: 'Order #12347',
      description: 'Kathiwadi Delicacy of Saurashtra.',
      seatNumber: 'C5',
      date: '2024-08-23',
      timing: '8:30 PM',
      numberOfPersons: 1,
      customerName: 'Alex Johnson',
      phoneNumber: '555-123-4567',
      status: 'Cancelled',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYTVpeVi7Btg-BXjEAQtg3Xuln11xmtr3p3HX9V2wiDfXu4-T2UEu6UbcZD0fJSG6biW4&usqp=CAU'
    },
    {
      id: 4,
      restaurantId: 1,
      restaurantName: 'Chaat House',
      title: 'Order #12348',
      description: 'North Indian Thali with butter naan, paneer masala, dal, and dessert.',
      seatNumber: 'A1, A2, A3',
      date: '2024-09-19',
      timing: '7:00 PM',
      numberOfPersons: 3,
      customerName: 'Michael Brown',
      phoneNumber: '222-333-4444',
      status: 'Processing',
      image: 'https://www.todaystraveller.net/wp-content/uploads/2021/05/IMG_0349-2-1024x768.jpeg'
    },
    {
      id: 5,
      restaurantId: 2,
      restaurantName: 'Tandoor Treats',
      title: 'Order #12349',
      description: 'Traditional Gujarati thali with dhokla, kachori, and farsan.',
      seatNumber: 'E3, E4',
      date: '2024-08-26',
      timing: '12:00 PM',
      numberOfPersons: 2,
      customerName: 'Emma Wilson',
      phoneNumber: '888-999-0000',
      status: 'Completed',
      image: 'https://www.tandooritreats.com/img/curry_1740075785.jpg'
    },
    {
      id: 6,
      restaurantId: 3,
      restaurantName: 'Royal Biryani',
      title: 'Order #12350',
      description: 'Large Margherita pizza with extra cheese and garlic bread.',
      seatNumber: 'F2',
      date: '2024-08-27',
      timing: '6:30 PM',
      numberOfPersons: 1,
      customerName: 'Sophia Davis',
      phoneNumber: '444-555-6666',
      status: 'Completed',
      image: 'https://miro.medium.com/v2/resize:fit:513/1*NmiahIDhJPTo_so6PwOCEA.png'
    }
  ];


  getStatusClass(status: string): string {
    switch (status) {
      case 'Completed':
        return 'completed';
      case 'Processing':
        return 'processing';
      case 'In Progress':
        return 'in-progress';
      case 'Cancelled':
        return 'cancelled';
      default:
        return '';
    }
  }
}
