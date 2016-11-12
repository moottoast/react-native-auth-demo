import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyARPbg_BOaoS1j-9KdKCXZQ8YiZ7vnilMc',
      authDomain: 'auth-tutorial-3b05b.firebaseapp.com',
      databaseURL: 'https://auth-tutorial-3b05b.firebaseio.com',
      storageBucket: 'auth-tutorial-3b05b.appspot.com',
      messagingSenderId: '746375122459'
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

export default App;
