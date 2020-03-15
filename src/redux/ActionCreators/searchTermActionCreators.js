export const actionTypes = {
    UPDATE_SEARCH_TERM:  'UPDATE_SEARCH_TERM',
    CLEAR_SEARCH_TERM:   'CLEAR_SEARCH_TERM',
};

export const updateSearchTerm = (searchTerm) => ({
    type: actionTypes.UPDATE_SEARCH_TERM,
    searchTerm,
});

export const clearSearchTerm = () => ({
    type: actionTypes.CLEAR_SEARCH_TERM
});
