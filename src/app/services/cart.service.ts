import { Injectable } from '@angular/core';
import { CartItem } from '../models/CartItem';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  items: CartItem[] = [];

  constructor() { }

  getItems(): CartItem[] {
    return this.items;
  }

  addItem(item: CartItem) {
    this.items.push(item);
  }

  deleteItem(item: CartItem) {
    const itemIndex = this.items.findIndex(cartItem => cartItem.product.id === item.product.id);
    this.items.splice(itemIndex, 1);
  }
}
