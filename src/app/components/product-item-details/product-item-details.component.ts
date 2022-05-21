import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrls: ['./product-item-details.component.css']
})
export class ProductItemDetailsComponent implements OnInit {

  product: Product | undefined;
  quantity: number = 1;

  constructor(private route: ActivatedRoute, private httpService: HttpService, private cartService: CartService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.httpService.getProducts().subscribe(data => this.product = data.find(prod => prod.id === Number(id)))
  }

  changeQuantity(event: Event): void {
    this.quantity = +(event.target as HTMLInputElement).value;
  }

  addToCart(product: Product) {
    this.cartService.addItem({ product, quantity: this.quantity });
    alert(`${product.name} ${product.name.slice(-1) === 's' ? 'have' : 'has'} been added to the cart. 🛒`);
  }

}
