import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { CartItem } from 'src/app/models/CartItem';
import { Order } from 'src/app/models/Order';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: CartItem[] = [];

  constructor(private cartService: CartService, private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  onOrderSubmit(userData: Order) {
    this.orderService.setOrderData({ ...userData, items: this.items, totalPrice: this.getTotalPrice() });
    this.cartService.emptyCartItems();
    this.items = [];
    this.router.navigate(['/success']);
  }

  getTotalPrice(): string {
    return this.cartService.getTotalPrice();
  }

  removeItem(item: CartItem) {
    this.cartService.deleteItem(item);
  }
}
