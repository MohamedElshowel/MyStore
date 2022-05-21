import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrls: ['./product-item-details.component.css']
})
export class ProductItemDetailsComponent implements OnInit {

  product: Product | undefined;

  constructor(private route: ActivatedRoute, private httpService: HttpService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.httpService.getProducts().subscribe(data => this.product = data.find(prod => prod.id === Number(id)))
  }

  addToCart(product: Product) {
    alert(`${product.name} ${product.name.slice(-1) === 's' ? 'have' : 'has'} been added to the cart. 🛒`);
  }

}
