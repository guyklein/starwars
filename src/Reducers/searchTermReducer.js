import {actionTypes} from "../redux/searchTermActionCreators";

const initialState = '';

const searchTermReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.UPDATE_SEARCH_TERM:
            return action.searchTerm;
        case actionTypes.CLEAR_SEARCH_TERM:
            return '';
        default:
            return state;
    }
};

export default searchTermReducer;
