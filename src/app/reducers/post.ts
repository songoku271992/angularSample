import * as postAction from '../actions/post';
import { Post } from '../models/post';
import { PostDetail } from '../models/post-detail';


export function reducer(state: State = initialState, action: postAction.PostSelectAction) {
    switch (action.type) {
        case postAction.SELECT_POST:
            return updateState(action.payload, false, true);
        case postAction.ENABLE_FORM_POST_DETAIL:
            return updateState(state.post, true, false);
        case postAction.DISABLE_FORM_POST_DETAIL:
            return updateState(state.post, false, true);
        default:
            return state;
    }
}

function updateState(post, showPostDetail, showFormPostDetail) {
    let state = {
        post: (post) ? post : null,
        showPostDetail: (showPostDetail) ? true : false,
        showFormPostDetail: (showFormPostDetail) ? true : false
    }
    return state;
}

export interface State {
    post: Post;
    showPostDetail: Boolean;
    showFormPostDetail: Boolean;
    postDetail: PostDetail;
}

const initialState: State = {
    post: null,
    showPostDetail: true,
    showFormPostDetail: false,
    postDetail: null,
};

export const getPostState = (state: State) => state.post;
export const showPostDetail = (state: State) => state.showPostDetail;
export const showFormPostDetail = (state: State) => state.showFormPostDetail;