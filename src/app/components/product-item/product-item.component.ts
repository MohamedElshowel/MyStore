import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  addToCart(product: Product): void {
    alert(`${product.name} ${product.name.slice(-1) === 's' ? 'have' : 'has'} been added to the cart. 🛒`);
  }
}