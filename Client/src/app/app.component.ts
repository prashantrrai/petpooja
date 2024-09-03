import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @Input() title: string = 'Discover the Best Restaurants';
  @Input() searchQuery: string = '';
  @Input() bannerImage: string = '';

  search(): void {
    // Implement search functionality here
    console.log('Searching for:', this.searchQuery);
  }
}
