import { Injectable } from '@angular/core';
import { Order } from '../models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private order: Order | undefined;

  constructor() { }

  getOrderData(): Order | undefined {
    return this.order;
  }

  setOrderData(order: Order): void {
    this.order = order;
  }
}