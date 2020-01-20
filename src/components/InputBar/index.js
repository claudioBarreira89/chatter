import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

import Button from '../../elements/Button';
import Loader from '../../elements/Loader';
import styles from './styles';

export default class Input extends Component {
    state = {
        message: ''
    }

    handlePress = () => {
        const { message } = this.state;
        const { onSubmit, uid } = this.props;
        onSubmit(message, uid);

        this.setState({
            message: ''
        });
    }

    handleChange = (value) => {
        this.setState({
            message: value
        });
    }

    render() {
        const { message } = this.state;
        const { isLoading } = this.props;

        return (
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        value={message}
                        onChangeText={this.handleChange}
                        placeholder="Write you message"
                    />
                </View>
                <Button text="Send" onPress={this.handlePress} />
                {isLoading && <Loader />}
            </View>
        );
    }
}
