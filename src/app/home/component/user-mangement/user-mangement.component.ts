import { Component, OnInit, OnDestroy} from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../../../models/user';
import { Post } from '../../../models/post';
import { Observable, Subscription } from 'rxjs';
import * as fromRoot from '../../../reducers';

@Component({
  selector: 'app-user-mangement',
  templateUrl: './user-mangement.component.html',
  styleUrls: ['./user-mangement.component.css']
})
export class UserMangementComponent implements OnInit, OnDestroy {
  userSubcrice: Subscription;
  user: User;
  posts: Post[];
  post: Post;
  constructor(
    public store: Store<fromRoot.State>
  ) {
    this.userSubcrice = this.store.select(fromRoot.getInfoUserState).subscribe(state => this.user = state);
  }
  ngOnInit() {
    if( this.user) {
      console.log(this.user);
    }
    //console.log(this.user);
  }
  ngOnDestroy() {
    this.userSubcrice.unsubscribe();
  }

}
