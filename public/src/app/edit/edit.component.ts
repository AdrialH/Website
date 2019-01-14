import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  product: any;

  constructor(
    private httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) { };

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.httpService.showProduct(params.id).subscribe(data => {
        // console.log("edit1", params.id);
        // console.log("edit2", data);
        this.product = data;
      });
    });
  }
  updateProduct(id, rest) {
    // console.log("update1",id, rest)
    this.httpService.updateProduct(id, rest).subscribe(product => this.product = product);
    this._router.navigate(['/products/list']);
  };
  deleteProduct(product_id: number): void {
    this.httpService.deleteProduct(product_id).subscribe(product => this.product = product);
    this._router.navigate(['/products/list'])
  }
  back() {
    this._router.navigate(['/products/list'])
  }
}
