import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/Order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit {

  orderData: Order | undefined;

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderData = this.orderService.getOrderData();
  }

}
