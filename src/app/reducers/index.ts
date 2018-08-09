import * as fromUser from './user';
import * as fromPost from './post';
import * as fromPostDetail from './postDetail';
import { User } from './../models/user';
import {
    createSelector,
    createFeatureSelector,
    ActionReducerMap,
} from '@ngrx/store';

export const reducers = {
    user: fromUser.reducer,
    post: fromPost.reducer,
    postDetail: fromPostDetail.reducer,
}

export interface State {
    user: fromUser.State;
    post: fromPost.State;
    postDetail: fromPostDetail.State;
}

export const getUserState = (state: State) => state.user;
export const getShowLeftMenuState = createSelector(getUserState, fromUser.getShowLeftMenuState);
export const getInfoUserState = createSelector(getUserState, fromUser.getUserState);

/**
 * get reduce of post
 */

export const getPostState = (state: State) => state.post;
export const showPostDetail = createSelector(getPostState, fromPost.showPostDetail);
export const showFormPostDetail = createSelector(getPostState, fromPost.showFormPostDetail);

/**
 * get reduce of post detail
 */

export const getPostDetailState = (state: State) => state.postDetail;
// export const getEnablePostDetail = createSelector(getPostDetailState, fromPostDetail.)
