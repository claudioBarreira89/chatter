import { firebaseService } from '../../services';
import { actionTypes } from './constants';

export function saveMessages(payload) {
    return dispatch => dispatch({
        type: actionTypes.SAVE_MESSAGES,
        ...payload
    });
}

export function getMessages() {
    return (dispatch) => {
        firebaseService.messageRef
            .orderBy('created_at', 'desc')
            .onSnapshot((snapshot) => {
                dispatch(saveMessages({ payload: snapshot.docs }));
            });
    };
}

export function createMessage(message, uid) {
    return () => firebaseService.createMessage({ message, uid });
}
