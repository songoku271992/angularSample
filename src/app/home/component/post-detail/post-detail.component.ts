import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { PostDetail } from '../../../models/post-detail';
import { Post } from '../../../models/post';
import { PostService } from '../../../services/post.service';
import * as fromRoot from '../../../reducers';
import * as actionPostDetail from '../../../actions/postDetail';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})

export class PostDetailComponent implements OnChanges, OnDestroy {

  constructor(
    public postService: PostService,
    private store: Store<fromRoot.State>) {
  }

  @Input() postDetail: PostDetail = null;
  submitted = false;
  postServiceSubscription: Subscription;

  ngOnChanges(change: SimpleChanges) {
    console.log(change["postDetail"]);
  }

  onTitleKeyup(event: any) {
    let postDetail = new PostDetail();
    postDetail.title = event.target.value;
    this.store.dispatch(new actionPostDetail.ChangeDataThePostDetail(postDetail));
  }

  onSubmit() {
    let post = Post.getInstance();
    post.id = this.postDetail.id;
    post.body = this.postDetail.body;
    post.title = this.postDetail.title;
    post.userId = this.postDetail.userId;
    this.postServiceSubscription = this.postService.updatePost(post).subscribe(
      () => console.log("final update")
    );
    this.submitted = false;
  }

  ngOnDestroy() {
    if(this.postServiceSubscription) {
      this.postServiceSubscription.unsubscribe();
    }
  }

}
