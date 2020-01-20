import { connect } from 'react-redux';
import Chat from '../components/Chat';
import { getMessages, createMessage } from '../store/messages/actions';

const mapStateToProps = state => ({
    user: state.user,
    messages: state.messages,
    state
});

const mapDispatchToProps = {
    getMessages,
    createMessage
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
