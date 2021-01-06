import React from 'react';
import { View, StyleSheet, } from 'react-native';
import InterestBubbleContainer from '../../components/InterestBubbleContainer.js';

const myInterests = [
  {id: 1, name: "Gym", selected: false},
  {id: 2, name: "Reading", selected: false},
  {id: 3, name: "Going to the cinema", selected: false},
  {id: 4, name: "Studying", selected: false},
]

const ProfileSetupScreen = (props) => {
  return (
    <View style={styles.container}>
      <InterestBubbleContainer interests={myInterests}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  interestContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  }
})

export default ProfileSetupScreen;