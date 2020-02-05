import React, { Component } from 'react';
import Routes from './routes';
import Login from './containers/LoginContainer';
import Loader from './elements/Loader';

export default class App extends Component {
    componentDidMount() {
        const { getUser } = this.props;
        getUser();
    }

    render() {
        const { user } = this.props;
        if (!user.uid) {
            return <Login />;
        }
        return <Routes />;
    }
}
