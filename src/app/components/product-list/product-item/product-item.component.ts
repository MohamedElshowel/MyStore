import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product | undefined;
  quantity: number = 1;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  changeQuantity(event: Event): void {
    this.quantity = +(event.target as HTMLInputElement).value;
  }

  addToCart(product: Product): void {
    this.cartService.addItem({ product, quantity: this.quantity });
    alert(`${product.name} ${product.name.slice(-1) === 's' ? 'have' : 'has'} been added to the cart. 🛒`);
  }
}