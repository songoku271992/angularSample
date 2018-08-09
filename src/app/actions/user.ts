import { Action } from '@ngrx/store';
import { User } from '../models/user'

export const USERSELECT = '[User] select';
export const USEROPENTLEFTMENU = '[User] open left menu user';
export const USERCLOSETLEFTMENU = '[User] close left menu user';
export const POSTOPENTLEFTMENU = '[POST] open left menu user';
export const POSTCLOSETLEFTMENU = '[POST] close left menu user';

export class UserSelectAction implements Action {
    type = USERSELECT;
    constructor(public payload: User) { }
}

export class UserOpenLeftMenu implements Action {
    type = USEROPENTLEFTMENU;
    constructor() { }
}

export class UserCloseLeftMenu implements Action {
    type = USERCLOSETLEFTMENU;
    constructor() { }
}

export class PostOpenLeftMenu implements Action {
    type = POSTOPENTLEFTMENU;
    constructor() { }
}

export class PostCloseLeftMenu implements Action {
    type = POSTCLOSETLEFTMENU;
    constructor() { }
}
