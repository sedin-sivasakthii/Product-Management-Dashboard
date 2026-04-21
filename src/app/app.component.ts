import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { PRODUCTS } from './data/mock-data';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  searchTerm = signal('');
  products = signal<Product[]>(PRODUCTS);

  filteredProducts = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();

    if (!term) return this.products();

    return this.products().filter(product =>
      product.name.toLowerCase().includes(term) ||
      product.description.toLowerCase().includes(term)
    );
  });

  updateSearch(value: string): void {
    this.searchTerm.set(value);
  }

  onRatingChanged(event: { productId: number; rating: number }): void {
    this.products.update(products =>
      products.map(product =>
        product.id === event.productId
          ? { ...product, rating: event.rating }
          : product
      )
    );
  }
}