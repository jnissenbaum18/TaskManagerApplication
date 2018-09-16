import {StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';
import {headingText, textInput} from '../../styles/common.style';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: theme.CONTAINER_PADDING,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    titleHeading: {
        ...headingText
    }
})