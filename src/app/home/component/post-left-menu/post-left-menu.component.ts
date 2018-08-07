import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';
import * as fromRoot from '../../../reducers';
import * as UserAction from '../../../actions/user';
import * as PostDetailAction from '../../../actions/postDetail';

@Component({
  selector: 'app-post-left-menu',
  templateUrl: './post-left-menu.component.html',
  styleUrls: ['./post-left-menu.component.css']
})
export class PostLeftMenuComponent implements OnInit {

  constructor(public store: Store<fromRoot.State>) { }

  ngOnInit() {
  }

  goBack() {
    this.store.dispatch(new UserAction.UserOpenLeftMenu());
    this.store.dispatch(new PostDetailAction.disablePostDetail());
  }

}
