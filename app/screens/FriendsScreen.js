import React, {Component} from 'react';
import {View, Text} from 'react-native';

import Friends from '../components/FriendsScreen/Friends.Screen.Component';

export default class FriendsScreen extends Component {
    static navigationOptions = {
        title: 'Friends'
    };
    render() {
        return (
            <Friends/>
        )
    }
}