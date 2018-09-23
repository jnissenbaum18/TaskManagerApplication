import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {PropTypes} from 'prop-types';

import styles from './Home.Screen.Component.Style';
import Event from '../Event/Event.Component';

class Home extends Component {
    render () {
        const {events} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleHeading}>
                        Home Screen
                    </Text>
                </View>
                <View style={styles.bodyContainer}>
                    <View style={styles.eventsContainer}>
                        {events.map((event, i)=>{
                            return (
                                <Event 
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

Home.propTypes = {
    events: PropTypes.array
}

export default Home;
