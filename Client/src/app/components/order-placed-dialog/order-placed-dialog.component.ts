import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-order-placed-dialog',
  standalone: true,
  imports: [MatIconModule, RouterModule],
  templateUrl: './order-placed-dialog.component.html',
  styleUrl: './order-placed-dialog.component.css'
})
export class OrderPlacedDialogComponent {

  constructor(public dialogRef: MatDialogRef<OrderPlacedDialogComponent>) { }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
