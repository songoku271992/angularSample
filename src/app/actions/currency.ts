import { Currency } from '../models/currency';
import {Action} from '@ngrx/store';
export const CURRENCIEUPDATE = '[Currency] UpdateAll';
export const CURRENCIEUPDATED = '[Currency] UpdateAll';

export class CurrenciesUpdateAction implements Action {
    type = CURRENCIEUPDATE; 
}


export class CurrenciesUpdatedAction implements Action {
    type = CURRENCIEUPDATED;
    constructor(public payload: Currency[]) {} 
}