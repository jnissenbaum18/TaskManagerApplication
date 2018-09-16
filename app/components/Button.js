import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import PropTypes from 'prop-types';

class Button extends Component {
    render () {
        const {text, title, onButtonPress} = this.props;
        return (
            <Button
                onPress={this.props.onButtonPress}
            />
        )
    }
}

Button.propTypes = {
    text: PropTypes.string,
    title: PropTypes.string,
    onButtonPress: PropTypes.func
}

export default Button;