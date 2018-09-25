import React, {Component} from 'react';
import {View, Text} from 'react-native';

import Friends from '../components/FriendsScreen/Friends.Screen.Component';

export default class FriendsScreen extends Component {
    static navigationOptions = {
        title: 'Friends'
    };
    state = {
        friends: [
            {
                name: "Boardgames group",
                online: true
            },
            {
                name: "Max",
                online: true
            },
            {
                name: "Anthony",
                online: false
            }
        ]
    }
    render() {
        return (
            <Friends friends={this.state.friends}/>
        )
    }
}