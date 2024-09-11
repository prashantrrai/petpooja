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
    }
    // Add more orders as needed
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
