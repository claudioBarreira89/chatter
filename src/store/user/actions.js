import { Alert } from 'react-native';
import { firebaseService } from '../../services';
import { actionTypes } from './constants';

export function setUser(payload) {
    return dispatch => dispatch({
        type: actionTypes.SET_USER,
        payload
    });
}

export function getUser() {
    return (dispatch) => {
        firebaseService.signIn()
            .then((data) => {
                if (data.error) {
                    Alert.alert('Something went wrong');
                    return;
                }
                dispatch(setUser(data.user));
            });
    };
}
