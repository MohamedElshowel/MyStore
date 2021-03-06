import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getProducts().subscribe(data => this.products = data);
  }

}
