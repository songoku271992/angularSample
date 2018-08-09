import * as userAction from '../actions/user';
import { User } from '../models/user';

export function reducer(state: State = initialState, action: userAction.UserSelectAction) {
    switch (action.type) {
        case userAction.USERSELECT:
            return updateState(action.payload, false, true);
        case userAction.USEROPENTLEFTMENU:
            return updateState(state.user, true, false);
        case userAction.USERCLOSETLEFTMENU:
            return updateState(state.user, false, true);
        default:
            return state;
    }
}

function updateState(user, showLeftMenuUser, showLeftMenuPost) {
    let state = {
        user: (user) ? user : null,
        showLeftMenuUser: (showLeftMenuUser) ? true : false,
        showLeftMenuPost: (showLeftMenuPost) ? true : false
    }
    return state;
}

export interface State {
    user: User;
    showLeftMenuUser: boolean,
    showLeftMenuPost: boolean,
}

const initialState: State = {
    showLeftMenuUser: true,
    user: null,
    showLeftMenuPost: false,
};

export const getUserState = (state: State) => state.user;
export const getShowLeftMenuState = (state: State) => state.showLeftMenuUser;
export const getShowLeftPostState = (state: State) => state.showLeftMenuPost;