import { Product } from './product';
import { HttpService } from './http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title: String = '';
  // products: Product[];
  // createComment: Comment = new Comment();
  // comment: Comment;


  constructor(
    private httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {

  }

}
