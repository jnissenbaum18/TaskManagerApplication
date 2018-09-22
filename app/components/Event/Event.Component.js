import React, {Component} from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';

import styles from './Event.Component.Style';

class Event extends Component {
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
                    <Text style={[styles.bodyText, styles.dateText]}>Start Date: {startDate}</Text>
                    <Text style={[styles.bodyText, styles.dateText]}>End Date: {endDate}</Text>
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
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    attendees: PropTypes.array,
    location: PropTypes.string
}

export default Event;