import { StyleSheet } from 'react-native';
import { colors } from '../../theme';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 2,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    textContainer: {
        width: 'auto',
        maxWidth: '70%',
        backgroundColor: colors.GREY,

        borderRadius: 12,
        paddingHorizontal: 15,
        paddingVertical: 12,
        marginLeft: 10
    },
    rightContainer: {
        justifyContent: 'flex-end'
    },
    rightTextContainer: {
        backgroundColor: colors.PRIMARY,
        marginRight: 10
    },
    leftText: {
        textAlign: 'left'
    },
    rightText: {
        textAlign: 'right'
    },
    text: {
        fontSize: 12
    }
});

const flattenedStyles = {
    container: StyleSheet.flatten([styles.container, styles.rightContainer]),
    textContainer: StyleSheet.flatten([styles.textContainer, styles.rightTextContainer]),
    leftText: StyleSheet.flatten([styles.leftText, styles.text]),
    rightText: StyleSheet.flatten([styles.rightText, styles.text])
};

export {
    styles,
    flattenedStyles
};
