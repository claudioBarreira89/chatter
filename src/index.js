import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';

// import Loader from './components/common/Loader';
// import HooksExample from './components/HooksExample';

// import { UserContext } from './contexts';
import { firebaseService } from './services';

export default function App() {
    const [user, setUser] = useState(null);

    useEffect(
        () => {
            firebaseService.signIn()
                .then(({ userFire, error }) => {
                    if (error) {
                        Alert.alert('Something went wrong');
                        return;
                    }

                    setUser(userFire);
                });
        },
        []
    );

    if (!user) {
        // return <Loader />;
        return '';
    }

    // return (
    //     <UserContext.Provider value={user}>
    //         <HooksExample />
    //     </UserContext.Provider>
    // );
}
