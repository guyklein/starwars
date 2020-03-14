import { combineReducers } from "redux";
import resultsReducer from './results';
import starShipsReducer from './starShipsReducer';
import selectedCharacterReducer from './selectedCharacterReducer';
import searchTermReducer from './searchTermReducer';

const rootReducer = combineReducers({
    resultsReducer,
    searchTermReducer,
    selectedCharacterReducer,
    starShipsReducer,
});

export default rootReducer;
