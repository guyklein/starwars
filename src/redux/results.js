import { createSelector } from 'reselect';
import {searchTermSelector} from './searchTerm';

export const resultsSelector = state => state.resultsReducer;

export const getVisibleResults = createSelector(
    [ resultsSelector, searchTermSelector ],
    (results, searchTerm) =>
        searchTerm === '' ? results : results.filter(result => result.name.toLowerCase().includes(searchTerm.toLowerCase()))
);


export const useResults = createSelector(
    [ resultsSelector ],
    results => results
);
