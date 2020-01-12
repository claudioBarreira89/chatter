import React, {
    useEffect, useReducer, useContext
} from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { firebaseService } from '../../services';
import { UserContext } from '../../store/context';
import InputBar from '../InputBar';
import Message from '../../elements/Message';
import { messagesReducer } from '../../store/reducers/messagesReducer';
import styles from './styles';

export default function Chat() {
    const { uid } = useContext(UserContext);
    const [messages, dispatchMessages] = useReducer(messagesReducer, []);

    useEffect(
        () => {
            return firebaseService.messageRef
                .orderBy('created_at', 'desc')
                .onSnapshot((snapshot) => {
                    dispatchMessages({ type: 'add', payload: snapshot.docs });
                });
        },
        []
    );

    return (
        <SafeAreaView>
            <View style={styles.chatContainer}>
                <View style={styles.messagesContainer}>
                    <FlatList
                        contentContainerStyle={{ paddingVertical: 10 }}
                        inverted
                        data={messages}
                        keyExtractor={(item) => {
                            return item.id;
                        }}
                        renderItem={({ item }) => {
                            const data = item.data();
                            const side = data.user_id === uid ? 'right' : 'left';

                            return (
                                <Message side={side} message={data.message} />
                            );
                        }}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <InputBar />
                </View>
            </View>
        </SafeAreaView>
    );
}
