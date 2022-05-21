import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/CartItem';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: CartItem[] = [];

  constructor(private cartService: CartService, private httpService: HttpService) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    if (!this.items.length) {
      this.httpService.getProducts().subscribe(data => this.items = [{ product: data[0], quantity: 10 }, { product: data[1], quantity: 8 }])
    }
  }

  onOrderSubmit() {
    alert('submit clicked!')
  }

  getTotalPrice(): string {
    let totalPrice = 0;
    this.items.forEach(item => totalPrice += item.product.price * item.quantity)
    return totalPrice.toFixed(2);
  }
}
