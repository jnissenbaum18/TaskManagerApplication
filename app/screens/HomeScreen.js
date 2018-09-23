import React from 'react';
import {
	Image,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';

import { MonoText } from '../components/StyledText';
import Home from '../components/HomeScreen/Home.Screen.Component';

export default class HomeScreen extends React.Component {
	static navigationOptions = {
		header: null,
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
	render() {
		return (
			<Home events={this.state.events}/>
		)
	}
}

