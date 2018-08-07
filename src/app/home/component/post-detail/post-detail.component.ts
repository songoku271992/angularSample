import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { PostDetail } from '../../../models/post-detail';
import { Post } from '../../../models/post';
import { PostService } from '../../../services/post.service';
import * as fromRoot from '../../../reducers';
import * as actionPostDetail from '../../../actions/postDetail';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit, OnChanges {
  constructor(
    public postService: PostService,
    private store: Store<fromRoot.State>
  ) {
  }
  @Input() postDetail: PostDetail;
  
  dataPostDetail: PostDetail;
  ngOnInit() {
    this.dataPostDetail = this.postDetail;
    console.log(this.dataPostDetail.address['street']);
  }
  ngOnChanges() {
    console.log(this.dataPostDetail);
  }

  onTitleKeyup(event: any) {
    console.log(event.target.value);
    let postDetail = new PostDetail();
    postDetail.title = event.target.value;
    console.log(postDetail);
    this.store.dispatch(new actionPostDetail.ChangeDataThePostDetail(postDetail));
  }

  onSubmit($event) {
    let post = new Post();
    post.id = this.postDetail.id;
    post.body = this.postDetail.body;
    post.title = this.postDetail.title;
    post.userId = this.postDetail.userId
    this.postService.updatePost(post).subscribe(
      () => console.log("final update")
    );
  }

}
