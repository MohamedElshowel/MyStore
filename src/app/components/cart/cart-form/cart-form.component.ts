import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Order } from 'src/app/models/Order';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css']
})
export class CartFormComponent implements OnInit {

  @Output() onSubmitForm = new EventEmitter();

  fullName: string = '';
  address: string = '';
  creditCardNum: number | string = '';
  isValidCreditCard: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const userData: Order = {
      fullName: this.fullName,
      address: this.address,
      creditCardNum: this.creditCardNum,
    }
    this.onSubmitForm.emit(userData);
    // Reset Form Field Values
    this.fullName = '';
    this.address = '';
    this.creditCardNum = '';
  }

  validateCreditCardInput(): void {
    this.isValidCreditCard = !isNaN(+this.creditCardNum) && this.creditCardNum.toString().length === 16;
  }
}
