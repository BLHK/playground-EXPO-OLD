import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Button } from 'react-native';
import InterestBubbleContainer from '../../components/InterestBubbleContainer.js';

const myInterests = [
  {id: 1, name: "Gym", selected: false},
  {id: 2, name: "Reading", selected: false},
  {id: 3, name: "Going to the cinema", selected: false},
  {id: 4, name: "Studyingasdadadsa", selected: false},
]

const ProfileSetupScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imagePicker}>
      <Button title="Image picker"/>
      </View>
      <InterestBubbleContainer interests={myInterests}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // alignItems: 'flex-end'
  },
  imagePicker: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  }
})

export default ProfileSetupScreen;