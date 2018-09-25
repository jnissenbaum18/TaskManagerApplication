import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SettingsScreen from '../screens/SettingsScreen';
import FriendsScreen from '../screens/FriendsScreen';
import CalendarScreen from '../screens/CalendarScreen';

const HomeStack = createStackNavigator({
	Home: HomeScreen,
});

HomeStack.navigationOptions = {
	tabBarLabel: 'Home',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={
				Platform.OS === 'ios'
					? `ios-information-circle${focused ? '' : '-outline'}`
					: 'md-home'
			}
		/>
	),
};

const LoginStack = createStackNavigator({
	Login: LoginScreen,
});

LoginStack.navigationOptions = {
	tabBarLabel: 'Login',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
		/>
	),
};

const SettingsStack = createStackNavigator({
	Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
	tabBarLabel: 'Settings',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
		/>
	),
};

const FriendsStack = createStackNavigator({
	Friends: FriendsScreen
})

FriendsStack.navigationOptions = {
	tabBarLabel: 'Friends',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-contacts'}
		/>
	),
}

const CalendarStack = createStackNavigator({
	Calendar: CalendarScreen
})

CalendarStack.navigationOptions = {
	tabBarLabel: "Calendar",
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-calendar'}
		/>
	),
}

export default createBottomTabNavigator({
	HomeStack,
	LoginStack,
	FriendsStack,
	CalendarStack,
	SettingsStack,
});
