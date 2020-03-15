export const actionTypes = {
    UPDATE_STAR_SHIPS: 'UPDATE_STAR_SHIPS',
    CLEAR_STAR_SHIPS: 'CLEAR_STAR_SHIPS',
};

export const updateStarShips = (starShips) => ({
    type: actionTypes.UPDATE_STAR_SHIPS,
    starShips,
});

export const clearStarShips = () => ({
    type: actionTypes.CLEAR_STAR_SHIPS
});

