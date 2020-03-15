import {actionTypes} from "../redux/ActionCreators/starShipsActionCreators";

const initialState = {};

const starShipsReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.UPDATE_STAR_SHIPS:
            return [
                ...action.starShips
            ];
        case actionTypes.CLEAR_STAR_SHIPS:
            return [];
        default:
            return state;
    }
};

export default starShipsReducer;
