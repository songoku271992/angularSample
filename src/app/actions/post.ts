import { Action } from '@ngrx/store';
import { Post } from '../models/post';
import { PostDetail } from '../models/post-detail';

export const SELECT_POST = "[Post]Select post detail";
export const ENABLE_FORM_POST_DETAIL = "[Post]enable post detail";
export const DISABLE_FORM_POST_DETAIL = "[Post]disable post detail";
export const CHANGE_DATA_POST_DETAIL = "[PostDetail]change data the post detail";

export class PostSelectAction implements Action {
    type = SELECT_POST;
    constructor(public payload: Post) {

    }
}

export class EnableFromPostDetail implements Action {
    type = ENABLE_FORM_POST_DETAIL;
    constructor() {
    }
}

export class DisableFromPostDetail implements Action {
    type = DISABLE_FORM_POST_DETAIL;
    constructor() {
    }
}

export class ChangeDataThePostDetail implements Action {
    type = CHANGE_DATA_POST_DETAIL;
    constructor(public payload: PostDetail) {

    }
}