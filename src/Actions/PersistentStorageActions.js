export const actionTypes =  {
    SAVE_STATE: 'LOCAL_STORAGE/SAVE_STATE',
    CLEAR_STATE: 'LOCAL_STORAGE/CLEAR_STATE',
};

export default {
    saveState: () => ({
        type: actionTypes.SAVE_STATE,
    }),
};
