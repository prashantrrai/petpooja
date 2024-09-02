import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { OrderHistoryComponent } from './pages/order-history/order-history.component';
import { RestaurantListingComponent } from './pages/restaurant-listing/restaurant-listing.component';
import { TrainSeatSelectionComponent } from './pages/train-seat-selection/train-seat-selection.component';
import { RestaurantDetailComponent } from './pages/restaurant-detail/restaurant-detail.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: 'order-history', component: OrderHistoryComponent },
    { path: 'restaurant-listing', component: RestaurantListingComponent },
    { path: 'restaurant-detail', component: RestaurantDetailComponent },
    { path: 'train-seat-selection', component: TrainSeatSelectionComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];