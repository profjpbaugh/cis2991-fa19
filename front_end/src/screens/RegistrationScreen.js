import React from 'react';
import { Text, StyleSheet, View, Button, TextInput, Dimensions,
  Alert, ActivityIndicator, SafeAreaView, ScrollView, Picker } from 'react-native';

const styles = StyleSheet.create({
  mainView: { 
    flex: 1,
  },
  container: {
    flex: 6,
  },
  scrollView: {
    backgroundColor: 'white',
    marginTop: 30,
    width: 0.75 * Dimensions.get('window').width,
  },
  labelAndTextInputView: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 15,
  },
  label: {
    flex: 2,
    paddingRight: 10,
    textAlignVertical: 'center'
  },
  textInput: {
    flex: 3,
    borderColor: 'black',
    borderWidth: 2,
    height: 40,
  },
  statePicker: {
    flex: 3,
    height: 40,
    width: 200
  },
  registerButtonView: {
    flex: 1,
    width: Dimensions.get('window').width / 2,
    margin: 10
  }
});

export class RegistrationScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      streetAddress: '',
      city: '',
      stateUS: '',
      zipCode: '',
      phone: '',
      loading: false
    };
  }

  static navigationOptions = {
    title: 'Hunters Ridge — Registration',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  };

  clearForm = () => {
    this.setState({email: ''});
    this.setState({password: ''});
    this.setState({name: ''});
    this.setState({streetAddress: ''});
    this.setState({city: ''});
    this.setState({stateUS: ''});
    this.setState({zipCode: ''});
    this.setState({phone: ''});
    this.setState({loading: false});
  }

  validateName = () => {
    return (this.state.name !== '');
  }

  validateEmail = () => {
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email));
  }

  validatePassword = () => {
    return (/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(this.state.password));
  }

  validateStreetAddress = () => {
    return (this.state.streetAddress !== '');
  }
  
  validateCity = () => {
    return (this.state.city !== '');
  }

  validateState = () => {
    return this.state.stateUS !== '';
  }

  validateZipCode = () => {
    return (/^\d{5}$/.test(this.state.zipCode));
  }

  validatePhone = () => {
    return (/^\d{10}$/.test(this.state.phone));
  }

  registerPressed = () => {
    if (!this.validateName()) {
      Alert.alert('Please enter valid Full Name');
      // this.setState({name: ''});
      return;
    }
    if (!this.validateEmail()) {
      Alert.alert('Please enter valid Email');
      // this.setState({email: ''});
      return;
    }
    if (!this.validatePassword()) {
      Alert.alert('Please enter valid Password', 
      'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters.');
      this.setState({password: ''});
      return;
    }
    if (!this.validateStreetAddress()) {
      Alert.alert('Please enter valid Street Address');
      // this.setState({streetAddress: ''});
      return;
    }
    if (!this.validateCity()) {
      Alert.alert('Please enter valid City');
      // this.setState({city: ''});
      return;
    }
    if (!this.validateState()) {
      Alert.alert('Please select State');
      // this.setState({stateUS: ''});
      return;
    }
    if (!this.validateZipCode()) {
      Alert.alert('Please enter valid ZIP code', 'Must be 5 digits.');
      // this.setState({zipCode: ''});
      return;
    }
    if (!this.validatePhone()) {
      Alert.alert('Please enter valid Phone Number.', 'Must be 10 digits.');
      // this.setState({phone: ''});
      return;
    }

    this.sendRegisterRequest();
  };

  sendRegisterRequest = () => {
    this.setState({loading: true});

    // TODO: implement request to the server
    // For now simulating server response delay + success
    setTimeout(() => {
      this.setState({loading: false});
      Alert.alert('Sign up Success');
      this.props.navigation.navigate('Home');
      this.clearForm();
    }, 2000);
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView} >
            <View style={styles.labelAndTextInputView}>
              <Text style={styles.label}>Full name: </Text>
              <TextInput
                style={styles.textInput}
                placeholder="Full name"
                autoCompleteType="name"
                onChangeText={(name) => this.setState({name})}
                value={this.state.name}
              />
            </View>

            <View style={styles.labelAndTextInputView}>
              <Text style={styles.label}>Email: </Text>
              <TextInput
                style={styles.textInput}
                placeholder="Email"
                autoCompleteType="email"
                onChangeText={(email) => this.setState({email})}
                value={this.state.email}
              />
            </View>

            <View style={styles.labelAndTextInputView}>
              <Text style={styles.label}>Password: </Text>
              <TextInput
                style={styles.textInput}
                placeholder="Password"
                autoCompleteType="password"
                secureTextEntry={true}
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
              />
            </View>

            <View style={styles.labelAndTextInputView}>
              <Text style={styles.label}>Street address: </Text>
              <TextInput
                style={styles.textInput}
                placeholder="Street address"
                autoCompleteType="street-address"
                onChangeText={(streetAddress) => this.setState({streetAddress})}
                value={this.state.streetAddress}
              />
            </View>

            <View style={styles.labelAndTextInputView}>
              <Text style={styles.label}>City: </Text>
              <TextInput
                style={styles.textInput}
                placeholder="City"
                onChangeText={(city) => this.setState({city})}
                value={this.state.city}
              />
            </View>

            <View style={styles.labelAndTextInputView}>
              <Text style={styles.label}>State: </Text>
              <Picker 
                selectedValue = {this.state.stateUS}
                style={styles.statePicker}
                onValueChange={(value) =>
                  this.setState({stateUS: value})
                }>
                <Picker.Item label = "Alabama" value = "AL" />
                <Picker.Item label = "Alaska" value = "AK" />
                <Picker.Item label = "Arizona" value = "AZ" />
                <Picker.Item label = "Arkansas" value = "AR" />
                <Picker.Item label = "California" value = "CA" />
                <Picker.Item label = "Colorado" value = "CO" />
                <Picker.Item label = "Connecticut" value = "CT" />
                <Picker.Item label = "Delaware" value = "DE" />
                <Picker.Item label = "Florida" value = "FL" />
                <Picker.Item label = "Georgia" value = "GA" />
                <Picker.Item label = "Hawaii" value = "HI" />
                <Picker.Item label = "Idaho" value = "ID" />
                <Picker.Item label = "Illinois" value = "IL" />
                <Picker.Item label = "Indiana" value = "IN" />
                <Picker.Item label = "Iowa" value = "IA" />
                <Picker.Item label = "Kansas" value = "KS" />
                <Picker.Item label = "Kentucky" value = "KY" />
                <Picker.Item label = "Louisiana" value = "LA" />
                <Picker.Item label = "Maine" value = "ME" />
                <Picker.Item label = "Maryland" value = "MD" />
                <Picker.Item label = "Massachusetts" value = "MA" />
                <Picker.Item label = "Michigan" value = "MI" />
                <Picker.Item label = "Minnesota" value = "MN" />
                <Picker.Item label = "Mississippi" value = "MS" />
                <Picker.Item label = "Missouri" value = "MO" />
                <Picker.Item label = "Montana" value = "MT" />
                <Picker.Item label = "Nebraska" value = "NE" />
                <Picker.Item label = "Nevada" value = "NV" />
                <Picker.Item label = "New Hampshire" value = "NH" />
                <Picker.Item label = "New Jersey" value = "NJ" />
                <Picker.Item label = "New Mexico" value = "NM" />
                <Picker.Item label = "New York" value = "NY" />
                <Picker.Item label = "North Carolina" value = "NC" />
                <Picker.Item label = "North Dakota" value = "ND" />
                <Picker.Item label = "Ohio" value = "OH" />
                <Picker.Item label = "Oklahoma" value = "OK" />
                <Picker.Item label = "Oregon" value = "OR" />
                <Picker.Item label = "Pennsylvania" value = "PA" />
                <Picker.Item label = "Rhode Island" value = "RI" />
                <Picker.Item label = "South Carolina" value = "SC" />
                <Picker.Item label = "South Dakota" value = "SD" />
                <Picker.Item label = "Tennessee" value = "TN" />
                <Picker.Item label = "Texas" value = "TX" />
                <Picker.Item label = "Utah" value = "UT" />
                <Picker.Item label = "Vermont" value = "VT" />
                <Picker.Item label = "Virginia" value = "VA" />
                <Picker.Item label = "Washington" value = "WA" />
                <Picker.Item label = "West Virginia" value = "WV" />
                <Picker.Item label = "Wisconsin" value = "WI" />
                <Picker.Item label = "Wyoming" value = "WY" />
              </Picker>
            </View>

            <View style={styles.labelAndTextInputView}>
              <Text style={styles.label}>ZIP code: </Text>
              <TextInput
                style={styles.textInput}
                keyboardType = 'numeric'
                placeholder="ZIP code"
                autoCompleteType="postal-code"
                onChangeText={(zipCode) => this.setState({zipCode})}
                value={this.state.zipCode}
              />
            </View>

            <View style={styles.labelAndTextInputView}>
              <Text style={styles.label}>Phone number: </Text>
              <TextInput
                style={styles.textInput}
                keyboardType = 'numeric'
                placeholder="Phone number"
                autoCompleteType="tel"
                onChangeText={(phone) => this.setState({phone})}
                value={this.state.phone}
              />
            </View>
          </ScrollView>
        </SafeAreaView>

        <ActivityIndicator
          style={styles.spinner}
          animating={this.state.loading}
          size="large"
          color="#0000ff" />

        <View style={styles.registerButtonView}>
          <Button
            title="Sign up"
            disabled={this.state.loading}
            onPress={this.registerPressed}
          />
        </View>
      </View>
    );
  }
}