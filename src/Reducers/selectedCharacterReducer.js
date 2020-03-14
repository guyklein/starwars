import {actionTypes} from "../redux/selectedCharacterActions";

const initialState = {};

const selectedCharacterReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.UPDATE_SELECTED_CHARACTER:
            return action.character;
        case actionTypes.CLEAR_SELECTED_CHARACTER:
            return '';
        default:
            return state;
    }
};

export default selectedCharacterReducer;
