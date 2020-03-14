export const actionTypes = {
    ENQUEUE:                'ACTION_QUEUE/ENQUEUE',
    DEQUEUE_DISPATCH:       'ACTION_QUEUE/DEQUEUE_DISPATCH',
    DEQUEUE_NO_DISPATCH:    'ACTION_QUEUE/DEQUEUE_NO_DISPATCH',
};

export default {
    enqueue: action => ({
        type: actionTypes.ENQUEUE,
        queuedAction: action,
    }),
    dequeueDispatch: params => ({
        type: actionTypes.DEQUEUE_DISPATCH,
        params,
    }),
    dequeueNoDispatch: () => ({
        type: actionTypes.DEQUEUE_NO_DISPATCH,
    }),
};
