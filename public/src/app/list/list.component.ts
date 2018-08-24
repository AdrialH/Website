import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Product } from '../product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  products: any;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.getProducts().subscribe(products => {
      console.log("list", products)
      this.products = products
    });
  }
}
