import React from 'react';
import { Button as Btn, Text } from 'native-base';
import styles from './styles';

export default function Button({ text, disabled, onPress }) {
    return (
        <Btn primary disabled={disabled} onPress={onPress}><Text>{text}</Text></Btn>
    );
}
