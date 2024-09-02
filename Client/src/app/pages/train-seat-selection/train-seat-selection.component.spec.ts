import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainSeatSelectionComponent } from './train-seat-selection.component';

describe('TrainSeatSelectionComponent', () => {
  let component: TrainSeatSelectionComponent;
  let fixture: ComponentFixture<TrainSeatSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainSeatSelectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainSeatSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
