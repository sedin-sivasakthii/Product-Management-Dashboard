import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { CurrencyFormatterPipe } from '../../pipes/currency-formatter.pipe';
import { TimeAgoPipe } from '../../pipes/time-ago.pipe';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, StarRatingComponent, CurrencyFormatterPipe, TimeAgoPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;
  @Output() ratingChanged = new EventEmitter<{ productId: number; rating: number }>();

  onRatingSelected(rating: number): void {
    this.ratingChanged.emit({ productId: this.product.id, rating });
  }
}