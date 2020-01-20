import { actionTypes } from './constants';

export const initialState = [];

export default function messagesReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SAVE_MESSAGES: {
            return action.payload;
        }
        default: {
            return state;
        }
    }
}
