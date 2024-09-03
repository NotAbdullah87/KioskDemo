import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'; // Import Router
import { HeaderComponent } from '../header/header.component';
import { LoginModalBoxComponent } from '../login-modal-box/login-modal-box.component';
import { CommonModule } from '@angular/common';  
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HeaderComponent, LoginModalBoxComponent, CommonModule, HttpClientModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  isSubmitting = false; 
  isModalOpen = false;

  constructor(private http: HttpClient, private router: Router) {} // Inject Router

  openModal() {
    console.log("Open Modal")
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  handleSubmit(credentials: { email: string, password: string }) {
    console.log('handleSubmit called');
    console.log('Credentials:', credentials);
  
    if (this.isSubmitting) {
      console.log('Already submitting, ignoring...');
      return; // Prevent further submissions
    }
  
    this.isSubmitting = true; // Set flag to true
    const apiUrl = 'http://localhost:5109/api/login';
    const body = {
      Email: credentials.email,
      Password: credentials.password
    };
  
    this.http.post(apiUrl, body, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      responseType: 'text'
    }).subscribe(
      response => {
        console.log('Response:', response);
        if (response === 'Login Successful') {
          alert('Login Failed');
          this.isSubmitting = false; // Reset flag to allow re-submission
        } else {
  
          alert('Login Successful');
          this.router.navigate(['/Dashboard']); // Navigate to Dashboard
          this.closeModal(); // Close modal
        }
      },
      error => {
        console.error('Error occurred:', error);
        alert('An error occurred. Please try again.');
        this.isSubmitting = false; // Reset flag to allow re-submission
      }
    );
  }
}
