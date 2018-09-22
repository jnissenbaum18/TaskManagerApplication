import React, {Component} from 'react';
import {View, Text} from 'react-native'

import styles from './Calendar.Component.Style';
import Event from '../Event/Event.Component';

class Calendar extends Component {
    state = {
        events: [
            {
                id: 12345,
                title: 'Boardgame Night', 
                startDate: 'September 22, 2018 7:30 PM', 
                endDate: 'September 22, 2018, 11:00 PM', 
                attendees: ['Brad', 'Reid', 'Manish', 'Max'], 
                location: "Reid's house"
            },
            {
                id: 12346,
                title: 'Brunch', 
                startDate: 'September 24, 2018 1:00 PM', 
                endDate: 'September 24, 2018 3:00 PM', 
                attendees: ['Kevin', 'Anthony', 'Kat', 'Yayone'], 
                location: "Scotchwood Diner"
            }
        ]
    };
    render () {
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleHeading}>
                        Calendar Screen
                    </Text>
                </View>
                <View style={styles.bodyContainer}>
                    <View style={styles.calendarContainer}>
                        {this.state.events.map((event, i)=>{
                            return (
                                <Event 
                                    style={styles.eventContainer}
                                    key={i}
                                    itr={i}
                                    id={event.id}
                                    title={event.title} 
                                    startDate={event.startDate} 
                                    endDate={event.endDate} 
                                    attendees={event.attendees} 
                                    location={event.location}
                                />
                            )
                        })}
                    </View>
                </View>
            </View>
        )
    }
}

export default Calendar;
