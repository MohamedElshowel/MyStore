import { Injectable } from '@angular/core';
import { CartItem } from '../models/CartItem';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  private cartItems: CartItem[] = [];

  constructor() { }

  getItems(): CartItem[] {
    return this.cartItems;
  }

  emptyCartItems(): void {
    this.cartItems = [];
  }

  addItem(item: CartItem): boolean {
    let isAdded = true;
    const existingItem = this.cartItems.find(ci => ci.product.id === item.product.id);
    if (existingItem) {
      existingItem.quantity += item.quantity;
      if (existingItem.quantity > 10) {
        alert(`You have added the maximum number available of this product in you cart! 🛒`);
        existingItem.quantity = 10;
        isAdded = false;
      }
    } else {
      this.cartItems.push(item);
    }
    return isAdded;
  }

  deleteItem(item: CartItem): CartItem[] {
    const itemIndex = this.cartItems.findIndex(ci => ci.product.id === item.product.id);
    this.cartItems.splice(itemIndex, 1);
    return this.cartItems;
  }
}
