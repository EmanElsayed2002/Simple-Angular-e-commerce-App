import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rating.component.html',
  styleUrl: './rating.component.css',
})
export class RatingComponent {
  @Input() rating: number = 0;
  get Stars() {
    const fullStars = Math.floor(this.rating);
    const halfStars = this.rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStars ? 1 : 0);

    return [
      ...Array(fullStars).fill('full'),
      ...(halfStars ? ['half'] : []),
      ...Array(emptyStars).fill('empty'),
    ];
  }
}
