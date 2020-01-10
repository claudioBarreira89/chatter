import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { colors } from '../../theme';
import styles from './styles';

export default function Loader() {
    return (
        <View style={styles.container}>
            <ActivityIndicator animating color={colors.PRIMARY} size="small" />
        </View>
    );
}
