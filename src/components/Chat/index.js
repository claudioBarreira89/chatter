import React, { Component } from 'react';
import {
    KeyboardAvoidingView, FlatList, SafeAreaView, View
} from 'react-native';
import InputBar from '../InputBar';
import Message from '../../elements/Message';
import styles from './styles';

export default class Chat extends Component {
    componentDidMount() {
        const { getMessages } = this.props;
        getMessages();
    }

    render() {
        const { user: { uid }, messages, createMessage } = this.props;
        return (
            <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={100}>
                <SafeAreaView>
                    <View style={styles.chatContainer}>
                        <View style={styles.messagesContainer}>
                            {
                                messages && (
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
                                )
                            }
                        </View>

                        <View style={styles.inputContainer}>
                            <InputBar uid={uid} onSubmit={createMessage} />
                        </View>
                    </View>
                </SafeAreaView>
            </KeyboardAvoidingView>

        );
    }
}
