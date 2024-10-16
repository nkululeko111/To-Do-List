import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

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
      this.router.navigate(['/login']);
    } else {
      alert('Registration failed');
    }
  }
}
