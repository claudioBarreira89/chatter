import { actionTypes } from './constants';

export const initialState = {
    user: {}
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_USER: {
            const user = action.payload._user;
            return {
                ...state,
                ...user
            };
        }
        default: {
            return state;
        }
    }
}
