import React, { useState, useEffect } from 'react';
import { Alert, KeyboardAvoidingView } from 'react-native';
import Loader from './elements/Loader';
import Chat from './components/Chat';
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
            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={25}>
                <Chat />
            </KeyboardAvoidingView>
        </UserContext.Provider>
    );
}
