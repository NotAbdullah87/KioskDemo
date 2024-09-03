import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule here
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';


@Component({
  selector: 'app-login-modal-box',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login-modal-box.component.html',
  styleUrl: './login-modal-box.component.css'
})

export class LoginModalBoxComponent {
  @Output() close = new EventEmitter<void>();
  @Output() submit = new EventEmitter<{ email: string, password: string }>();

  email: string = '';
  password: string = '';

  onSubmit() {
    this.submit.emit({ email: this.email, password: this.password });
    this.closeModal();
  }

  closeModal() {
    this.close.emit();
  }
}
