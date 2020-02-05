import React, { Component } from 'react';
import { View } from 'react-native';
import Button from '../../elements/Button';
import TextInput from '../../elements/TextInput';
import Loader from '../../elements/Loader';
import styles from './styles';


export default class InputBar extends Component {
    state = {
        message: ''
    }

    handlePress = () => {
        const { message } = this.state;
        const { onSubmit, uid } = this.props;

        if (message) {
            onSubmit(message, uid);

            this.setState({
                message: ''
            });
        }
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
                    <TextInput text={message} onChangeText={this.handleChange} />
                </View>
                <Button text="Send" onPress={this.handlePress} />
                {isLoading && <Loader />}
            </View>
        );
    }
}
