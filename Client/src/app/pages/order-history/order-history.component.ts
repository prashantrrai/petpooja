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
      title: 'Order #12345',
      description: 'Delicious Italian meal with pasta, pizza, and dessert.',
      seatNumber: 'A12',
      date: '2024-08-18',
      status: 'Completed',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToTsn6g4wVCs1KgTpt9TwuHpZnqtfBrzJ8zA&s'
    },
    {
      title: 'Order #12346',
      description: 'Sushi and tempura with miso soup.',
      seatNumber: 'B5',
      date: '2024-08-20',
      status: 'In Progress',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXsfyJNBLjamFbkjPvgz84tS1kXjrW4UtB1w&s'
    },
    {
      title: 'Order #12347',
      description: 'Kathiwadi Delicacy of Saurashtra.',
      seatNumber: 'C5',
      date: '2024-08-23',
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
