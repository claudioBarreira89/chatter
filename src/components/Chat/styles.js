import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

export default StyleSheet.create({
    chatContainer: {
        top: 0
    },
    messagesContainer: {
        height: '100%',
        paddingBottom: 60
    },
    inputContainer: {
        width: '100%',
        height: 60,
        position: 'absolute',
        bottom: 0,
        paddingVertical: 10,
        paddingLeft: 20,

        borderTopWidth: 1,
        borderTopColor: colors.GREY
    }
});
