import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CartService } from '../../Service/cart/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  cartCounter: number = 0;
  constructor(private service: CartService) {}
  ngOnInit(): void {
    this.service.cartcount$.subscribe((cnt) => (this.cartCounter = cnt));
  }
}
