import { connect } from 'react-redux';
import Login from '../views/Login';

const mapStateToProps = state => ({
    user: state.user
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
