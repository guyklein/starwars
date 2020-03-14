import {actionTypes} from "../redux/resultsActionCreators";

const initialState = [];

const resultsReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.UPDATE_RESULTS:
            return [
                ...action.results,
            ];
        case actionTypes.CLEAR_RESULTS:
            return [];
        default:
            return state;
    }
};

export default resultsReducer;
