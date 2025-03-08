import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  constructor(private router: Router) {}
  onLogin() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const userData = JSON.parse(storedUser);

      if (
        this.email === userData.email &&
        this.password === userData.password
      ) {
        alert('Login successful!');
        console.log('Logged in user:', userData);
        this.router.navigate(['']);
      } else {
        alert('Invalid email or password.');
      }
    } else {
      alert('No user found. Please register first.');
    }
  }
}
