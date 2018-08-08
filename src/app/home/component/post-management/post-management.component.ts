import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../../models/user';
import { PostDetail } from '../../../models/post-detail';
import { Subscription } from 'rxjs';
import * as fromRoot from '../../../reducers';
import { Store } from '@ngrx/store';
import { PostService } from '../../../services/post.service';
import * as PostDetailAction from '../../../actions/postDetail';

@Component({
  selector: 'app-post-management',
  templateUrl: './post-management.component.html',
  styleUrls: ['./post-management.component.css']
})

export class PostManagementComponent implements OnInit, OnDestroy {
  user: User;
  posts: PostDetail[];
  postDetail: PostDetail;
  isShowPostDetail: Boolean = true;
  isShowFormDetail: Boolean = false;
  postDetailSubcrice: Subscription;
  userSubcrice: Subscription;
  
  constructor(
    public store: Store<fromRoot.State>,
    private postService: PostService
  ) {
    this.userSubcrice = this.store.select(fromRoot.getInfoUserState).subscribe(
      state => {
        this.user = state
        if (this.user) {
          this.getPostByUserId(this.user);
          this.isShowPostDetail = true;
          this.isShowFormDetail = false;
        }
      }
    );

    this.postDetailSubcrice = this.store.select(fromRoot.getPostDetailState).subscribe(
      state => {
        console.log(state.isShow);
        this.isShowFormDetail = state.isShow;
        if (!this.isShowFormDetail) {
          this.isShowPostDetail = true;
        }
      }
    )
  }

  

  ngOnInit() {
    this.isShowPostDetail = true;
    this.isShowFormDetail = false;
    console.log(123);
  }

  ngOnDestroy() {
    this.userSubcrice.unsubscribe();
  }

  getPostByUserId(user: User) {
    this.postService.getPostsByUserId(user.id).subscribe(
      data => {
        this.posts = data.map(
          post => {
            let postDetail1 = Object.assign(new PostDetail(), user, post);
            console.log(postDetail1);
            return postDetail1;
          }
        );
      }
    );
  }

  onSelectPostDetail(_postDetail: PostDetail) {
    this.postDetail = _postDetail;
    console.log(this.postDetail.address.street);
    this.isShowPostDetail = false;
    this.isShowFormDetail = true;
    this.store.dispatch(new PostDetailAction.enablePostDetail());
  }

}
