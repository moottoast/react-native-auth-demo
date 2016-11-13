import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner, CardSection } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyARPbg_BOaoS1j-9KdKCXZQ8YiZ7vnilMc',
      authDomain: 'auth-tutorial-3b05b.firebaseapp.com',
      databaseURL: 'https://auth-tutorial-3b05b.firebaseio.com',
      storageBucket: 'auth-tutorial-3b05b.appspot.com',
      messagingSenderId: '746375122459'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
      return (
        <CardSection>
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        </CardSection>
      );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={styles.placeSpinner}>
            <View><Spinner size="large" /></View>
          </View>
        );
    }
  }

  render() {
    return (
      <View style={styles.parentContainer}>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  placeSpinner: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  parentContainer: {
    flex: 1,
    flexDirection: 'column'
  }
};

export default App;
