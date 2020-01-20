import React, { Component } from 'react';
import Routes from './routes';
import Loader from './elements/Loader';

export default class App extends Component {
    componentDidMount() {
        const { getUser } = this.props;
        getUser();
    }

    render() {
        const { user } = this.props;
        if (!user.uid) {
            return <Loader />;
        }
        return <Routes />;
    }
}
