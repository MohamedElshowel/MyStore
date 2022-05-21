import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css']
})
export class CartFormComponent implements OnInit {

  @Output() onSubmitForm = new EventEmitter();

  fullName: string = '';
  address: string = '';
  cardNumber: number | string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.onSubmitForm.emit();
    // Reset Form Field Values
    this.fullName = '';
    this.address = '';
    this.cardNumber = '';
  }
}
