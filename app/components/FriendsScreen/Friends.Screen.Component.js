import React, {Component} from 'react';
import {View, Text} from 'react-native';

import styles from './Friends.Screen.Component.Style';

class Friends extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleHeading}>
                        Friends Screen
                    </Text>
                </View>
                <View style={styles.bodyContainer}>
                    <View style={{flex: 1}}>
                        <Text>
                            Friends Body
                        </Text>
                    </View>
                </View>
            </View>
        )
    }
}

export default Friends