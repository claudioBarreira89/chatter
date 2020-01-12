import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import Routes from './routes';
import Loader from './elements/Loader';
import { UserContext } from './store/context';
import { firebaseService } from './services';

export default function App() {
    const [user, setUser] = useState(null);

    useEffect(
        () => {
            firebaseService.signIn()
                .then((data) => {
                    if (data.error) {
                        Alert.alert('Something went wrong');
                        return;
                    }
                    setUser(data.user);
                });
        },
        []
    );

    if (!user) {
        return <Loader />;
    }

    return (
        <UserContext.Provider value={user}>
            <Routes />
        </UserContext.Provider>
    );
}
