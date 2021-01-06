import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const InterestBubble = (props) => {
  return(
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>{props.text}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default InterestBubble;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00dede",
    borderRadius: 20,
    padding: 10,
    margin: 2,
  }
})