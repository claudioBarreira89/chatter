import React, { useCallback, useState, useContext } from 'react';
import { View, TextInput } from 'react-native';
import { firebaseService } from '../../services';
import { UserContext } from '../../store/context';

import Button from '../../elements/Button';
import Loader from '../../elements/Loader';
import styles from './styles';

export default function Input() {
    const { uid } = useContext(UserContext);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handlePress = useCallback(
        () => {
            setIsLoading(true);
            firebaseService
                .createMessage({ message, uid })
                .then(() => {
                    setIsLoading(false);
                    setMessage('');
                });
        },
        [message]
    );

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput style={styles.input} value={message} onChangeText={setMessage} placeholder="Write you message" />
            </View>
            <Button text="Send" onPress={handlePress} />
            {isLoading && <Loader />}
        </View>
    );
}
