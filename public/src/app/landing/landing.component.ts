import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Comment } from '../comment';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  createPost: Comment = new Comment();
  comments: Comment[];
  comment: any;
  errors:any;

  constructor(
    private httpService: HttpService, 
    private _route: ActivatedRoute,
    private _router: Router) { }

  ngOnInit() {
    this.httpService.getComment().subscribe(comments=> this.comments = comments as Comment[])
  };
  
  deleteComment(comment_id: number): void {
    console.log("Delete first step", comment_id);
    this.httpService.removeComment(comment_id).subscribe(comment => {
      console.log("inside delete", comment)
      this.comment = comment
      this.httpService.getComment().subscribe(comments=> this.comments = comments as Comment[])
      this._router.navigate(['/landing'])
      });
  };
  addComments() {
    this.httpService.addComment(this.createPost).subscribe(comment=> {
      console.log(comment);
      if (comment['errors']) {
        this.errors = "please fill in all feilds."
        this._router.navigate([`/landing`])
      }
      else {
        this.comments.push(comment as Comment)
        this._router.navigate([`/landing`])
      }
    });
  }
}
