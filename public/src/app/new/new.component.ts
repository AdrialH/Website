import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Product } from '../product';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  errors: any;

  constructor(
    private httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { }

  products: any;
  createProduct: Product = new Product();

  ngOnInit() {
    this.httpService.getProducts().subscribe(products => {
      console.log(products)
      this.products = products as Product[]
    });
  }
  addProduct() {
    this.httpService.addProduct(this.createProduct).subscribe(product => {
      console.log(product);
      if (product['errors']) {
        this.errors = "This Product already exists."
        this._router.navigate(['products/new'])
      }
      else {
        // this.products.push(product as Product)
        this._router.navigate([`/products`])
      }
    });
  }
  back(product){
    this._router.navigate(['/products'])
  }
}
