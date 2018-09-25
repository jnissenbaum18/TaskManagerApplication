import React, {Component} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {PropTypes} from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

import styles from './Friends.Screen.Component.Style';

class Friends extends Component {
    render() {
        const {friends} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleHeading}>
                        Friends Screen
                    </Text>
                </View>
                <View style={styles.bodyContainer}>
                    <View style={styles.functionsContainer}>
                        <View style={{flexDirection: "row", justifyContent: 'space-around'}}>
                            <Button
                                onPress={()=>{}}
                                title="Request Friend"
                            />
                            <Button
                                onPress={()=>{}}
                                title="Create Group"
                            />
                        </View>
                        <View style={{flexDirection: "row", justifyContent: 'space-around'}}>
                            <View style={{flexDirection: "row", justifyContent: 'space-between'}}>
                                <Ionicons name="md-search" size={32} color="green" />
                                <TextInput
                                    onChangeText={()=>{}}
                                    value={"Search"}
                                />
                            </View>
                            <View style={{flexDirection: "row", justifyContent: 'space-between'}}>
                                <Ionicons name="md-arrow-down" size={32} color="green" />
                                <TextInput
                                    onChangeText={()=>{}}
                                    value={"Filter"}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.informationContainer}>
                        {friends.map((friend, i)=>{
                            const onlineIcon = friend.online ? "md-radio-button-on" : "md-radio-button-off"
                            return (
                                <View key={i} style={{flexDirection: 'row', paddingTop: 10}}>
                                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                                        <Text>
                                            {friend.name}
                                        </Text>
                                    </View>
                                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                                        <Text>
                                        <Ionicons name={onlineIcon} size={32} color="green" />
                                        </Text>
                                    </View>
                                    <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                                        <Button
                                            onPress={()=>{}}
                                            title="Ping"
                                        />
                                    </View>
                                </View>
                            )
                        })}
                    </View>
                </View>
            </View>
        )
    }
}

Friends.propTypes = {
    friends: PropTypes.array
}

export default Friends