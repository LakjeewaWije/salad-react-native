/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, TouchableHighlight,Alert } from 'react-native';
import {emailPasswordSignUp} from '../services/auth-service';
const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    touchableContainer: {
        borderWidth: 1,
        borderColor: 'red'
    }
});

export default class SignUpScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
    }

    render() {
        return (
            <View style={styles.container}>
                {/* <Text>Email:</Text>
                <TextInput
                    style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                /> */}
                <Text>Welcome to main screen !</Text>
                {/* <TextInput
                    style={{ height: 40, width: 200, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                />
                <TouchableHighlight style={styles.touchableContainer} onPress={() => { this.SignUp(); }}>
                    <Text style={styles.signInText}>Sign In</Text>
                </TouchableHighlight> */}
            </View>
        );
    }

    SignUp(){
        let email = this.state.email.replace(/\s+/g, '');
        let password = this.state.password;
        // Alert.alert(`email ${email} and password ${password}`);
        // Alert.alert('email ',email,'password ',password);

         emailPasswordSignUp(email,password).then((val)=>{
            Alert.alert('successfully registered');
            const { navigate } = this.props.navigation;
                        navigate("Login", {});
         }).catch((error)=>{
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/email-already-in-use') {
              Alert.alert('email-already-in-use');
            }else if(errorCode == 'auth/invalid-email'){
                Alert.alert('invalid-email');
            }else if(errorCode == 'auth/weak-password'){
                Alert.alert('weak-password');
            }else if(errorCode == 'auth/operation-not-allowed'){
                Alert.alert('operation-not-allowed');
            } else {
                Alert.alert(errorMessage);
            }
         });
        this.setState({
            email: '',
            password:''
          });
    }

}


