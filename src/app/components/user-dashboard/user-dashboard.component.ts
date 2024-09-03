import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {

  onButtonClick(buttonName: string) {
    console.log(`${buttonName} clicked`);
  }
  
}
