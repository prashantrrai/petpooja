import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { OrderHistoryComponent } from './pages/order-history/order-history.component';
import { RestaurantListingComponent } from './pages/restaurant-listing/restaurant-listing.component';
import { TrainSeatSelectionComponent } from './pages/train-seat-selection/train-seat-selection.component';
import { RestaurantDetailComponent } from './pages/restaurant-detail/restaurant-detail.component';
import { CustomerDetailsBookingComponent } from './pages/customer-details-booking/customer-details-booking.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'order/history', component: OrderHistoryComponent },
    { path: 'restaurant/list', component: RestaurantListingComponent },
    { path: 'restaurant/detail/:id', component: RestaurantDetailComponent },
    { path: 'seat', component: TrainSeatSelectionComponent },
    { path: 'booking', component: CustomerDetailsBookingComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];