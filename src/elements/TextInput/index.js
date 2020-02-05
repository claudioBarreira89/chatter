import React from 'react';
import { Input, Item } from 'native-base';

export default function TextInput({ text, onChangeText }) {
    return (
        <Item regular><Input value={text} onChangeText={onChangeText} /></Item>
    );
}
