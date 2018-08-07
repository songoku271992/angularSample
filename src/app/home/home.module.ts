import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ContainersComponent } from './containers/containers.component';
import { HeaderComponent } from './component/header/header.component';
import { NglModule } from 'ng-lightning/ng-lightning';
import { UserLeftMenuComponent } from './component/user-left-menu/user-left-menu.component';
import { SearchComponent } from './component/search/search.component';
import { LeftSiteBarComponent } from './component/left-site-bar/left-site-bar.component';
import { UserService } from '../services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { TopNavigationContentComponent } from './component/top-navigation-content/top-navigation-content.component';
import { UserMangementComponent } from './component/user-mangement/user-mangement.component';
import { PostManagementComponent } from './component/post-management/post-management.component';
import { PostService } from '../services/post.service';
import { PostLeftMenuComponent } from './component/post-left-menu/post-left-menu.component';
import { PostDetailComponent } from './component/post-detail/post-detail.component';
import { FormsModule }   from '@angular/forms';
import { MessageService } from '../services/message.service';
import { HttpErrorHandler } from '../services/http-error-handler.service';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    NglModule.forRoot(),
    HttpClientModule,
    FormsModule
   
  ],
  declarations: [ContainersComponent, HeaderComponent, UserLeftMenuComponent, SearchComponent, LeftSiteBarComponent, TopNavigationContentComponent, UserMangementComponent, PostManagementComponent, PostLeftMenuComponent, PostDetailComponent],
  providers: [
    UserService,
    PostService,
    MessageService,
    HttpErrorHandler
  ]
})
export class HomeModule { }
