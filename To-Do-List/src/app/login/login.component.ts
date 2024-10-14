import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
email: any;
password: any;
errorMessage: any;
onLogin() {
throw new Error('Method not implemented.');
}

}
