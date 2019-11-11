import React from 'react';
import { Text, StyleSheet, View, Button, SafeAreaView, ScrollView,
   Dimensions } from 'react-native';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleText: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 10
  },
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'white',
    marginHorizontal: 10,
  },
  descriptionText: {
    fontSize: 18,
  },
  signOutButtonView: {
    width: Dimensions.get('window').width / 2,
    margin: 10
  }
});

export class HomeScreen extends React.Component {
    static navigationOptions = {
      title: 'Home',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    };

    render() {
      return (
        <View style={styles.mainView}>
          <Text style={styles.titleText}>
            Hunters Ridge Trash Removal
          </Text>
          <Text style={styles.welcomeText}>
            {/* TODO: get user name from server */}
            Welcome admin!
          </Text>
          <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
              <Text style={styles.descriptionText}>
                Benefits of the Service:
                {"\n"}• Safety: Senior Doorstep Trash Removal eliminates many risks involved with late night trips to the dumpster. 
                {"\n"}• Cleanliness & Health Standards: For most Seniors it’s important to live a healthy lifestyle which includes the conditions of their homes and community. 
                {"\n"}• Inexpensive: The cost of Doorstep Garbage Removal is minimal and considered the least expensive multifamily home luxury amenity. 
                {"\n"}• Recycling:Allow senior communities to take accountability for the environment they will one day pass on to their children and grandchildren. 
                {"\n"}• Minimize Tasks: Seniors are on the go and, in many cases, busier than the average 35-year-old. 
                {"\n"}• Experts: our porters go through the most rigorous background checks to give you piece of mind 
                {"\n"}• Messy Trash: Leaky trash bags can tear or rip leaving an oily residue along with other environmentally harmful debris from the kitchen to the dumpster. Waste Away Doorstep is the answer. 
                {"\n"}• Trash Pile Up: Don’t let the trash pile up until the absolute last minute. Allow Waste Away to do the heavy lifting for you. 
                {"\n"}• Recycling:We know you want to be green but sometimes it’s hard. We make recycling easy and at your doorstep. 
                {"\n"}• Waste is Heavy:Travelling up and down stairs or even walking more than a block to the dumpster can be a risk to your personal health and safety. 
                {"\n"}• It’s Magic! Put the waste in the bin outside your door before bed and it’s magically gone in the morning 5 days a week. 
                {"\n"}• Luxury Living: Seniors Expect luxury living and prefer Doorstep Trash Removal to simplify their hectic lives. 
                {"\n"}• Enjoy Your Retirement: Why spend all that time delivering your own waste to the dumpster when you could be spending more time on your favorite activities? Waste Away Doorstep Will Save The Day!
              </Text>
            </ScrollView>
          </SafeAreaView>
          <View style={styles.signOutButtonView}>
            <Button 
              title="Sign out"
              onPress={() => this.props.navigation.push('Login')}
            />
          </View>
        </View>
      );
    }
  }