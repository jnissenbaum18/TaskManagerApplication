import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import PropTypes from 'prop-types';

import styles from './Login.Screen.Component.Style';

class Login extends Component {
    render(){
        const {loginHandler, registrationHandler, setUsername, setPassword} = this.props;
        return (
            <View>
                <Button
                    onPress={loginHandler}
                    title="Login"
                    color="#5d93dd"
                />
                <Button
                    onPress={registrationHandler}
                    title="Register"
                    color="#5d93dd"
                />
                <Text>
                    Username
                </Text>
                <TextInput
                    onChangeText={setUsername}
                    
                />
                <Text>
                    Password
                </Text>
                <TextInput
                    onChangeText={setPassword}
                    
                />
            </View>
        )
    }
}

Login.propTypes = {
    loginHandler: PropTypes.func,
    registrationHandler: PropTypes.func,
    setUsername: PropTypes.func,
    setPassword: PropTypes.func
}

export default Login