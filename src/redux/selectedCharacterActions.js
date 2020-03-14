export const actionTypes = {
    UPDATE_SELECTED_CHARACTER: 'UPDATE_SELECTED_CHARACTER',
    CLEAR_SELECTED_CHARACTER: 'CLEAR_SELECTED_CHARACTER',
};

export const updateSelectedCharacter = (character) => ({
    type: actionTypes.UPDATE_SELECTED_CHARACTER,
    character,
});

export const clearSelectedCharacter = () => ({
    type: actionTypes.CLEAR_SELECTED_CHARACTER
});
