import { actionTypes } from '../Actions/ActionQueueActions';

const queue = [];

const actionQueueMiddleware = state => next => action => {
    if (action.type === actionTypes.ENQUEUE) {
        queue.push(action.queuedAction);
    } else if (action.type === actionTypes.DEQUEUE_DISPATCH) {
        const queuedAction = queue.pop();

        if (typeof queuedAction === 'function') {
            return next(queuedAction.bind(null, action.params));
        }
    } else if (action.type === actionTypes.DEQUEUE_NO_DISPATCH) {
        queue.pop();
    }

    return next(action);
};

export default actionQueueMiddleware;
