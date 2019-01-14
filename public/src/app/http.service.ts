import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getProducts() {
    console.log("service")
    return this._http.get('/items');
  }

  showProduct(i) {
    console.log("showing", i)
    return this._http.get(`/items/${i}`);
  }

  addProduct(rest) {
    console.log("New Product Service", rest)
    return this._http.post('/items', rest);
  }

  updateProduct(id, rest) {
    console.log("update2", id, rest)
    return this._http.put(`/items/${id}`, rest);
  }

  deleteProduct(product_id: number) {
    return this._http.delete(`/items/${product_id}`)
  }
  //Get all comments for landing page
  getComment(){
    return this._http.get('/comment');
  }
  // Adding a comment on landing page
  addComment(comment){
    console.log("Comment", comment)
    return this._http.post('/comment', comment);
  }
  removeComment(comment_id: number) {
    console.log("Service delete", comment_id)
    return this._http.delete(`/comment/${comment_id}`)
  }
}