import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  showProduct: any;
  error: any;

  constructor(
    private httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) {}

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      // console.log("start", params.id)
      this.httpService.showProduct(params.id).subscribe(data => {
        // console.log("data",data);
        this.showProduct = data;
      })
  });
  }
  deleteProduct(product_id:number, product): void {
    this.httpService.showProduct(product_id).subscribe(product => {
      if (product['qty'] == 0){
        // console.log("true")
        this.httpService.deleteProduct(product_id).subscribe(product => this.showProduct = product);
        this._router.navigate(['/products'])

      }else{
        // console.log("false", product)
        this.error = "Sorry, this product can only be deleted when the quanity is 0."
        this._router.navigate(['/products', product_id])
      }
    })
  }
  back(){
    this._router.navigate(['/products/list'])
  }
}
