import {actionTypes} from '../Actions/PersistentStorageActions';

export const loadPersistentState = () => {
    try {
        const serializedState = window.localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        const result = JSON.parse(serializedState);
        return result;
    } catch (err) {
        return undefined;
    }
};

export const savePersistentState = (state) => {
    try {
        const serializedState = JSON.stringify({
            ...state,
        });
        window.localStorage.setItem('state', serializedState);
    } catch (err) {
        // Ignore write errors.
    }
};

// eslint-disable-next-line no-unused-vars
const persistentMiddleware = ({ dispatch, getState }) => next => action => {
    const result = next(action);
    switch (action.type) {
        case actionTypes.SAVE_STATE:{
            const state = getState();
            savePersistentState(state);
            break;
        }

        default:
            break;
    }
    return result;
};

export default persistentMiddleware;
