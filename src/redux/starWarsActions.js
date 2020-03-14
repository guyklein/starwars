import { StarWarsRequests } from '../services/swapi';
import {updateResults} from './resultsActionCreators';
import {clearStarShips, updateStarShips} from './starShipsActions';
import actions from '../Actions/PersistentStorageActions';
import {updateSelectedCharacter} from './selectedCharacterActions';
import {updateSearchTerm} from './searchTermActionCreators';

const searchStarWarsCharacter = (name) => (dispatch, getState) => {
    dispatch(updateSearchTerm(name));
};

const getAllStarWareCharacters = () => (dispatch) => {
    StarWarsRequests.getAllStarWarsCharacters().then((result) => {
        //update the list with a dispatch
        dispatch(updateResults(result));
    });
};

const getStarShipByCharacter = (character) => (dispatch, getState) => {
    Promise.all(
        character.starships.map(starshipUrl => StarWarsRequests.getStarWarsStarShip(starshipUrl))
    ).then(results => {
        dispatch(updateStarShips(results));
        // save the state
        dispatch(actions.saveState());
    });
};


const selectCharacter = (character) => (dispatch) => {
    // clear previous star ship results
    dispatch(clearStarShips());
    // update new character
    dispatch(updateSelectedCharacter(character));
    // get the new results
    dispatch(getStarShipByCharacter(character));
    // save the state
    dispatch(actions.saveState());
};


export {
    getAllStarWareCharacters,
    getStarShipByCharacter,
    searchStarWarsCharacter,
    selectCharacter,
};
