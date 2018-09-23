import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {PropTypes} from 'prop-types';
import {Calendar} from 'react-native-calendars';

import styles from './Calendar.Screen.Component.Style';
import Event from '../Event/Event.Component';

class CalendarScreen extends Component {
    convertDates (events) {
        // {
        //     id: 12345,
        //     title: 'Boardgame Night', 
        //     startDate: 1537644600, 
        //     endDate: 1537668000, 
        //     attendees: ['Brad', 'Reid', 'Manish', 'Max'], 
        //     location: "Reid's house"
        // }

        // {
        //     '2012-05-16': {selected: true, marked: true, selectedColor: 'blue'},
        //     '2012-05-17': {marked: true},
        //     '2012-05-18': {marked: true, dotColor: 'red', activeOpacity: 0},
        //     '2012-05-19': {disabled: true, disableTouchEvent: true}
        // }

        let datess = {
            "2018-08-23": {selected: true, startingDay: true, endingDay: true, color: "blue", textColor: "gray"},
            "2018-08-24": {selected: true, startingDay: true, endingDay: true, color: "blue", textColor: "gray"}
        }
        let dates = {}
        events.forEach(event => {
            const date = new Date(event.startDate*1000);
            const year = date.getFullYear();
            let month = date.getMonth();
            const day = date.getDate();
            month = month < 10 ? '0'+month : month;
            dates[`${year}-${month}-${day}`] = {selected: true, startingDay: true, endingDay: true, color: 'blue', textColor: 'gray'}
        });
        console.log('datess', datess)
        console.log('dates', dates)
        return dates
    }
    render () {
        const {events} = this.props;
        let calendarDates = this.convertDates(events);
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleHeading}>
                        Calendar Screen
                    </Text>
                </View>
                <View style={styles.bodyContainer}>
                    <View style={styles.calendarContainer}>
                        <Calendar
                            current={'2018-08-22'}
                            markedDates={calendarDates}
                            onDayPress={(day) => {console.log('selected day', day)}}
                            markingType={'period'}
                        />
                        {/*events.map((event, i)=>{
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
                        })*/}
                    </View>
                </View>
            </View>
        )
    }
}

Calendar.propTypes = {
    events: PropTypes.array
}

export default CalendarScreen;
