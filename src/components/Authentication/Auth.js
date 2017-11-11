import React, { Component } from 'react';
import { View, Text, TouchableOpacity,Image,StyleSheet,TextInput} from 'react-native';
import Login from './Login.js';
import Register from './Register.js';
import Home from '../Main/Home.js';

export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = { isSignIn: true };
}

gotoSignIn() {
    this.setState({ isSignIn: true });
}

signIn() {
    this.setState({ isSignIn: true });
}

signUp() {
    this.setState({ isSignIn: false });
}

goBackToMain() {
    const { navigator } = this.props;
    navigator.pop();
}

    render() {
      const {row1, iconStyle, titleStyle,main, controlStyle,
        butdn, butdk,activeStyle, inactiveStyle, anhuser} = styles;

      const { isSignIn } = this.state;
      const mainJSX = isSignIn ? <Login goBackToMain={this.goBackToMain.bind(this)} /> : <Register gotoSignIn={this.gotoSignIn.bind(this)} />;

      return (
        <View style = {main}>

           	{/* <Image style = {anhuser} source = {require('../img/user.png')}/> */}

            {mainJSX}

            <View style={controlStyle}>

                <TouchableOpacity style={butdn} onPress={this.signIn.bind(this)}>
                    <Text style={isSignIn ? activeStyle : inactiveStyle}>Đăng Nhập</Text>
                </TouchableOpacity>
                <TouchableOpacity style={butdk} onPress={this.signUp.bind(this)}>
                    <Text style={!isSignIn ? activeStyle : inactiveStyle}>Đăng Ký</Text>
                </TouchableOpacity>
            </View>  
        </View>
        );
    }
}
const styles = StyleSheet.create({
  main: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
      justifyContent: 'space-between'
  },
  inactiveStyle: {
      color: '#D7D7D7'
  },
  activeStyle: {
      color: '#3EBA77'
  },
  butdn: {
      backgroundColor: '#e3efbd',
      paddingVertical: 20,
      alignItems: 'center',
      flex: 1,
      marginRight: 1
  },
  butdk: {
      backgroundColor: '#e3efbd',
      paddingVertical: 20,
      alignItems: 'center',
      flex:1,
      marginLeft: 1,
  },
  controlStyle:{
      flexDirection:'row',
  },
anhuser:{
    width:150,
    height:150, 
    justifyContent:'center'
}
});
