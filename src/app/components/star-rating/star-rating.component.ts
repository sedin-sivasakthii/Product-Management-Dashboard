import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css'
})
export class StarRatingComponent {
  @Input() currentRating = 0;
  @Output() ratingSelected = new EventEmitter<number>();

  stars = [1, 2, 3, 4, 5];

  selectRating(star: number): void {
    this.ratingSelected.emit(star);
  }
}