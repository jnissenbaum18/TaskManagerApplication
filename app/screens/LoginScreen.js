import React from 'react';
import { View } from 'react-native';

import Login from '../components/LoginScreen/Login.Screen.Component';

export default class LoginScreen extends React.Component {
	static navigationOptions = {
		title: 'Login',
	};
	state = {
		username: '',
		password: ''
	}
	setUsername = (username) => {
		this.setState({
			username: username
		})
	}
	setPassword = (password) => {
		this.setState({
			password: password
		})
	}
	loginHandler = () => {
		console.log(`Logging in: ${this.state.username} ${this.state.password}`);
	}
	registrationHandler = () => {
		console.log(`Registering: ${this.state.username} ${this.state.password}`)
	}
	render() {
		return (
			<Login 
				loginHandler={this.loginHandler} 
				registrationHandler={this.registrationHandler} 
				setUsername={this.setUsername}
				setPassword={this.setPassword}
			/>
		);
	}
}


