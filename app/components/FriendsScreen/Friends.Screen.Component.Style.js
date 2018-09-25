import {StyleSheet} from 'react-native';
import theme from '../../styles/theme.style';
import * as Common from '../../styles/common.style';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    titleContainer: {
        ...Common.headingContainer
    },
    titleHeading: {
        ...Common.headingText
    },
    bodyContainer: {
        ...Common.bodyContainer
    },
    functionsContainer: {
        flex: 1,
        flexDirection: "column"
    },
    informationContainer: {
        flex: 5,
        flexDirection: "column"
    }
})