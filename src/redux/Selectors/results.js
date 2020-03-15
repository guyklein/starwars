import { createSelector } from 'reselect';
import {searchTermSelector} from './searchTerm';
import {selectedCharacterSelector} from './selectedCharacter';

export const resultsSelector = state => state.resultsReducer;

export const getVisibleResults = createSelector(
    [ resultsSelector, searchTermSelector ],
    (results, searchTerm) =>
        searchTerm === '' ? results : results.filter(result => result.name.toLowerCase().includes(searchTerm.toLowerCase()))
);

export const getVisibleSelectedCharacter = createSelector(
    [ getVisibleResults, selectedCharacterSelector ],
    (results, selectedCharacter) =>
        results.find(result => result.url === selectedCharacter.url)
);


export const useResults = createSelector(
    [ resultsSelector ],
    results => results
);
