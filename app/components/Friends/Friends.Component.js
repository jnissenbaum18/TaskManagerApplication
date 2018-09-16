import React, {Component} from 'react';
import {View, Text} from 'react-native';

import styles from './Friends.Component.Style';

class Friends extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleHeading}>
                    Friends Screens
                </Text>
            </View>
        )
    }
}

export default Friends