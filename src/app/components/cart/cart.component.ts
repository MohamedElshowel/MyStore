import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/CartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: CartItem[] = [];

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  onOrderSubmit() {
    this.cartService.emptyCartItems();
    this.items = [];
    this.router.navigate(['/success']);
  }

  getTotalPrice(): string {
    let totalPrice = 0;
    this.items.forEach(item => totalPrice += item.product.price * item.quantity)
    return totalPrice.toFixed(2);
  }

  removeItem(item: CartItem) {
    this.cartService.deleteItem(item);
  }
}
