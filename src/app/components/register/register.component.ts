import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(private router: Router) {}
  userForm = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  FormSubmit() {
    if (this.userForm.valid) {
      const userdata = this.userForm.value;
      localStorage.setItem('user', JSON.stringify(userdata)),
        alert('Registration successful!');
      this.router.navigate(['login']);
    } else {
      alert('Please fill all the fields correctly.');
    }
  }
}
