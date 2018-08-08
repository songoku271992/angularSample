import { PostActionTypes, PostActionUnion } from '../actions/postDetail';
import { PostDetail } from '../models/post-detail';

export function reducer(state: State = initialState, action: PostActionUnion) {
    console.log(action.payload);
    switch (action.type) {
        case PostActionTypes.CHANGE_DATA_POST_DETAIL:
            return updateState(action.payload, state.isShow);
        case PostActionTypes.ENABLE_POST_DETAIL:
            return updateState(state.postDetail, true);
        case PostActionTypes.DISABLE_POST_DETAIL:
            return updateState(state.postDetail, false);
        default:
            return state;
    }
}

function updateState(postDetail, _isShow) {
    let state = {
        postDetail: (postDetail) ? postDetail : null,
        isShow: (_isShow) ? true : false,
    }
    return state;
}

export interface State {
    postDetail: PostDetail;
    isShow: boolean;
}

const initialState: State = {
    postDetail: null,
    isShow: false,
};

export const getPostDetailState = (state: State) => state.postDetail;
