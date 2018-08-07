import { Action } from '@ngrx/store';
import { PostDetail } from '../models/post-detail';
export enum PostActionTypes {
    CHANGE_DATA_POST_DETAIL = "[PostDetail]change data the post detail",
    ENABLE_POST_DETAIL = "[PostDetail]enable data the post detail",
    DISABLE_POST_DETAIL = "[PostDetail]disable data the post detail"
}

export class ChangeDataThePostDetail implements Action {
    type = PostActionTypes.CHANGE_DATA_POST_DETAIL;
    constructor(public payload: PostDetail) {
    }
}

export class enablePostDetail implements Action {
    type = PostActionTypes.ENABLE_POST_DETAIL;
}

export class disablePostDetail implements Action {
    type = PostActionTypes.DISABLE_POST_DETAIL;
}

export type PostActionUnion = ChangeDataThePostDetail;