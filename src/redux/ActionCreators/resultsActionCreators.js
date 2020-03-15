export const actionTypes = {
    UPDATE_RESULTS:  'UPDATE_RESULTS',
    CLEAR_RESULTS:   'CLEAR_RESULTS',
};

export const updateResults = (results) => ({
    type: actionTypes.UPDATE_RESULTS,
    results,
});

export const clearResults = () => ({
    type: actionTypes.CLEAR_RESULTS
});

