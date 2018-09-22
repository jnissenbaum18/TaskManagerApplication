import React, {Component} from 'react';
import {View} from 'react-native';

import Calendar from '../components/Calendar/Calendar.Component';

export default class CalendarScreen extends Component {
    static navigationOptions = {
        title: 'Calendar'
    };
    render () {
        return (
            <Calendar/>
        )
    }
}