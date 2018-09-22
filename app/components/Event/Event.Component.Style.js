import {StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';
import * as Common from '../../styles/common.style';


export default StyleSheet.create({
    titleHeading: {
        ...Common.headingText,
        alignSelf: 'center'
    },
    bodyContainer: {
        width: 280,
        alignSelf: 'center'
    },
    bodyText: {
        paddingTop: 10
    },
    dateText: {
        fontWeight: theme.FONT_WEIGHT_MEDIUM
    },
    attendeesContainer: {
        flexDirection: 'row',
        //justifyContent: 'space-between'
    }
})