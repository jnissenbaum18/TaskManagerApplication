import React, {Component} from 'react';
import {View, Text} from 'react-native';

import Friends from '../components/Friends/Friends.Component';

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