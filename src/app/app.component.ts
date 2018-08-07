import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AmountChangeAction } from './actions/amount';
import * as fromRoot from './reducers';
import { Observable } from 'rxjs';
import { Currency } from './models/currency';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basicNgrx';
  
}
