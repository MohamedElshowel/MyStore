import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Order } from 'src/app/models/Order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

  orderData: Order | undefined;

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    this.orderData = this.orderService.getOrderData();
    if (!this.orderData) {
      this.router.navigate(['/cart']);
    }
  }

}
