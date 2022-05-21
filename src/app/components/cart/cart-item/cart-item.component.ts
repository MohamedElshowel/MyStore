import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CartItem } from 'src/app/models/CartItem';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() item!: CartItem;
  @Output() removeItemFromCart = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  removeItem(item: CartItem) {
    const isConfirmed = confirm(`Are you sure you want to remove ${item.product.name} from the cart?`);
    if (isConfirmed) {
      this.removeItemFromCart.emit(item)
    }
  }

}
