import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs';
import * as fromRoot from '../../../reducers';
import * as UserAction from '../../../actions/user';

@Component({
  selector: 'app-user-left-menu',
  templateUrl: './user-left-menu.component.html',
  styleUrls: ['./user-left-menu.component.css']
})
export class UserLeftMenuComponent implements OnInit, OnDestroy {
  userSubcrice: Subscription;
  selectedItem: number;
  constructor(
    private userService: UserService,
    public store: Store<fromRoot.State>
  ) {
    this.userSubcrice = this.store.select(fromRoot.getInfoUserState).subscribe(
      state => {
        console.log(state);
        this.user = state
        if (this.user) {
          this.selectedItem = this.user.id;
        }
      }
    );
  }
  users: User[];
  user: User;
  userSubscription: Subscription;
  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.userSubscription = this.userService.getListUser().subscribe(data => this.users = data);
  }

  ngOnDestroy() {
    this.userSubscription.unsubscribe();
  }

  OnselectUser(_user: User) {
    this.store.dispatch(new UserAction.UserCloseLeftMenu());
    this.store.dispatch(new UserAction.UserSelectAction(_user));
  }
}
