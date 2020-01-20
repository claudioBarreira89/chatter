import { initialState as userState } from './user/reducer';
import { initialState as messagesState } from './messages/reducer';

const initialState = {
    user: userState,
    messages: messagesState
};

export default initialState;
