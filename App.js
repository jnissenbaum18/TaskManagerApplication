import React, {Component} from 'react';
import { View } from 'react-native';
import Expo from 'expo';
import {Provider} from 'react-redux';

import initStore from './app/redux/store';

import App from './app/App.container';
export * from './app';

let Store = initStore();

console.log(Store)

export default class Main extends React.Component {
    render() {
        return (
            <Provider store={Store}>
                <App />
            </Provider>
        )
    }
}