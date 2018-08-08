import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../reducers';
import * as UserAction from '../../../actions/user';
import * as PostDetailAction from '../../../actions/postDetail';

@Component({
  selector: 'app-post-left-menu',
  templateUrl: './post-left-menu.component.html',
  styleUrls: ['./post-left-menu.component.css']
})

export class PostLeftMenuComponent {

  constructor(public store: Store<fromRoot.State>) { }

  goBack() {
    this.store.dispatch(new UserAction.UserOpenLeftMenu());
    this.store.dispatch(new PostDetailAction.disablePostDetail());
  }

}
