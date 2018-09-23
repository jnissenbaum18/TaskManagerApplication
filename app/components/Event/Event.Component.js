import React, {Component} from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

import styles from './Event.Component.Style';

class Event extends Component {
    convertTimestamp(timestamp){
        const date = new Date(timestamp*1000);
        const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        const year = date.getFullYear();
        const month = months[date.getMonth()];
        const day = date.getDate();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0'+minutes : minutes;
        const time = `${day} ${month} ${year} ${hours}:${minutes} ${ampm}` ;
        return time;
    }
    render () {
        const {id, itr, title, startDate, endDate, attendees, location} = this.props;
        let containerStyle 
        if (itr % 2 == 0) {
            containerStyle = {
                backgroundColor: "#e5d4bc"
            }
        } else {
            containerStyle = {
                backgroundColor: "#c7b59b"
            }
        }
        return (
            <View style={[{flex: 1}, containerStyle]}>
                <Text style={styles.titleHeading}>{title}</Text>
                <View style={styles.bodyContainer}>
                    <Text style={[styles.bodyText, styles.dateText]}>Start Date: {this.convertTimestamp(startDate)}</Text>
                    <Text style={[styles.bodyText, styles.dateText]}>End Date: {this.convertTimestamp(endDate)}</Text>
                    <View style={styles.attendeesContainer}>
                        <Text style={styles.bodyText}>Attendees:</Text>
                        {attendees.map((attendee, i)=>{
                            if (i + 1 == attendees.length) {
                                return (
                                    <Text key={i} style={[styles.bodyText, {paddingLeft: 5}]}>
                                        {attendee}
                                    </Text>
                                )
                            } else {
                                return (
                                    <Text key={i} style={[styles.bodyText, {paddingLeft: 5}]}>
                                        {attendee},
                                    </Text>
                                )
                            }
                        })}
                    </View>
                    <Text style={styles.bodyText}>Location: {location}</Text>
                </View>
            </View>
        )
    }
}

Event.propTypes = {
    id: PropTypes.number,
    itr: PropTypes.number,
    title: PropTypes.string,
    startDate: PropTypes.number,
    endDate: PropTypes.number,
    attendees: PropTypes.array,
    location: PropTypes.string
}

export default Event;