import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

export default StyleSheet.create({
    safeArea: {
        backgroundColor: '#fff'
    },
    chatContainer: {
        backgroundColor: '#eee',
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
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: colors.GREY
    }
});
