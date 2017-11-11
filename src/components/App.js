import React, { Component } from 'react';
import { View, Text,  } from 'react-native';
import Auth from './Authentication/Auth.js';
import Home from './Main/Home.js';
import TAnony from './Authentication/TAnony.js';
// import Voice from './Main/Voice.js';

export default class App extends Component {
    render() {
        return (
        <Auth/>
    )
    }
}