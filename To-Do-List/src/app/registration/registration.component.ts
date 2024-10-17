import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  standalone: true,
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  imports: [CommonModule, FormsModule, MatInputModule, MatFormFieldModule, MatButtonModule]
})
export class RegistrationComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister(form: NgForm) {
    if (form.valid && this.authService.register(this.name, this.email, this.password)) {
      alert('Registration successful! Please log in.');
      this.router.navigate(['/login']);
    } else {
      alert('Registration failed. User already exists or input is invalid.');
    }
  }
}
