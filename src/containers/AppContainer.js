import { connect } from 'react-redux';
import { getUser } from '../store/user/actions';
import App from '../App';

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = {
    getUser
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
