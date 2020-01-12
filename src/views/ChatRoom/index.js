import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import Chat from '../../components/Chat';


export default function ChatRoom() {
    return (
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={100}>
            <Chat />
        </KeyboardAvoidingView>
    );
}
