import React, {Component} from 'react';
import {View} from 'react-native';

import Calendar from '../components/CalendarScreen/Calendar.Screen.Component';

export default class CalendarScreen extends Component {
    static navigationOptions = {
        title: 'Calendar'
    };
    state = {
        events: [
            {
                id: 12345,
                title: 'Boardgame Night', 
                startDate: 1537644600, 
                endDate: 1537668000, 
                attendees: ['Brad', 'Reid', 'Manish', 'Max'], 
                location: "Reid's house"
            },
            {
                id: 12346,
                title: 'Brunch', 
                startDate: 	1537808400, 
                endDate: 1537815600, 
                attendees: ['Kevin', 'Anthony', 'Kat', 'Yayone'], 
                location: "Scotchwood Diner"
            }
        ]
    };
    render () {
        return (
            <Calendar events={this.state.events}/>
        )
    }
}