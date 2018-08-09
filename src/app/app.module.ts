import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { reducers } from './reducers/index';
import { StoreModule } from '@ngrx/store';
import { NglModule } from 'ng-lightning/ng-lightning';
import { AppRoutingModule } from './app-routing.module';
import { UserService } from './services/user.service';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    NglModule.forRoot(),
    AppRoutingModule,
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})

export class AppModule { }
