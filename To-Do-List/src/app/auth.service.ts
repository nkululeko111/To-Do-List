import { Injectable } from '@angular/core';

interface User {
  name: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
  private isAuthenticated = false;

  login(email: string, password: string): boolean {
    const user = this.users.find((u: User) => u.email === email && u.password === password);
    if (user) {
      this.isAuthenticated = true;
      return true;
    } else {
      return false;
    }
  }

  register(name: string, email: string, password: string): boolean {
    const userExists = this.users.some((u: User) => u.email === email);
    if (userExists) {
      return false;
    } else {
      const newUser: User = { name, email, password };
      this.users.push(newUser);
      localStorage.setItem('users', JSON.stringify(this.users));
      return true;
    }
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
