import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import * as fromRoot from '../../../reducers';
import { Store } from '@ngrx/store';
import * as UserAction from '../../../actions/user';

@Component({
  selector: 'app-left-site-bar',
  templateUrl: './left-site-bar.component.html',
  styleUrls: ['./left-site-bar.component.css']
})
export class LeftSiteBarComponent implements OnInit, OnDestroy {
  stateLeftMenuUserSubscribe: Subscription;
  isShowLeftMenuUser: boolean;
  isShowLeftMenuPost: boolean;
  constructor(
    private store: Store<fromRoot.State>
  ) {
    this.stateLeftMenuUserSubscribe = this.store.select(fromRoot.getUserState).subscribe(
      state => {
        this.isShowLeftMenuUser = state.showLeftMenuUser,
        this.isShowLeftMenuPost = state.showLeftMenuPost
      }
    );
  }

  ngOnInit() {
  }
  ngOnDestroy() {
    this.stateLeftMenuUserSubscribe.unsubscribe();
  }

}
