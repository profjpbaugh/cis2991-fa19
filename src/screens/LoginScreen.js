import React from 'react';
import { Text, StyleSheet, View, Button, TextInput, Dimensions,
    Alert, ActivityIndicator } from 'react-native';

const styles = StyleSheet.create({
    mainView: { 
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleText: {
      fontFamily: 'Cochin',
      fontSize: 35,
      fontWeight: 'bold',
      paddingTop: 20
    },
    inputView: {
      alignItems: 'stretch',
      paddingBottom: 20
    },
    spinner: {
    },
    emailTextInput: {
      borderColor: 'black',
      borderWidth: 2,
      width: Dimensions.get('window').width / 2,
      height: 40,
      margin: 10
    },
    passwordTextInput: {
        borderColor: 'black',
        borderWidth: 2,
        height: 40,
        margin: 10
    },
    signInButtonView: {
      margin: 10
    },
    registerButtonView: {
      margin: 10
    }
  });

export class LoginScreen extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        loading: false
      };
    }

    static navigationOptions = {
      header: null
    };

    validateEmail = () => {
      return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email));
    }

    validatePassword = () => {
      return (this.state.password != '');
      // Must contain at least one number and one uppercase and lowercase letter,\
      // and at least 8 or more characters
      // return (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(this.state.password));
    }

    sendLoginRequest = () => {
      this.setState({loading: true});

      // TODO: implement request to the server
      // For now hardcoding email/password and simulating server response delay
      setTimeout(() => {
        this.setState({loading: false});
        if (this.state.email === 'admin@hr.com' &&
            this.state.password === 'admin') {
          Alert.alert('Sign in Success')
          this.props.navigation.navigate('Home')
        } else {
          Alert.alert('Sign in Failed', 'Invalid credentials. Please try again.')
          this.setState({email: ''});
          this.setState({password: ''});
        }
      }, 2000);
    }

    signInPressed = () => {
      if (this.validateEmail()) {
        if (this.validatePassword()) {
          this.sendLoginRequest();
        } else {
          Alert.alert('Please enter Password');
        }
      } else {
        Alert.alert('Please enter valid Email');
      }
    };

    render() {
      return (
        <View style={styles.mainView}>
          {/* <StatusBar hidden={true}/> */}
          <Text style={styles.titleText}> Hunters Ridge{"\n"}Trash Removal</Text>
          <ActivityIndicator
            style={styles.spinner}
            animating={this.state.loading}
            size="large"
            color="#0000ff" />
          <View styles={styles.inputView}>
            <TextInput
              style={styles.emailTextInput}
              placeholder="email"
              autoCompleteType="email"
              onChangeText={(email) => this.setState({email})}
            />
            <TextInput
              style={styles.passwordTextInput}
              placeholder="password"
              autoCompleteType="password"
              secureTextEntry={true}
              onChangeText={(password) => this.setState({password})}
            />
            <View style={styles.signInButtonView}>
              <Button
                title="Sign in"
                disabled={this.state.loading}
                onPress={this.signInPressed}
              />
            </View>
            <View style={styles.registerButtonView}>
              <Button
                style={styles.registerButton}
                title="Sign up"
                color="#94e5ff"
                disabled={this.state.loading}
                onPress={() => this.props.navigation.navigate('Register')}
              />
            </View>
          </View>
        </View>
      );
    }
  }