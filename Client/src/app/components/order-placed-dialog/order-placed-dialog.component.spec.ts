import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPlacedDialogComponent } from './order-placed-dialog.component';

describe('OrderPlacedDialogComponent', () => {
  let component: OrderPlacedDialogComponent;
  let fixture: ComponentFixture<OrderPlacedDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderPlacedDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderPlacedDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
