import React from 'react';
import { View, StyleSheet } from 'react-native';
import InterestBubble from './InterestBubble';

const InterestBubbleContainer = (props) => {
  console.log(props.interests)
  return(
    <View style={styles.interestContainer}>
      {props.interests.map(interest => (
        <InterestBubble key={interest.id} text={interest.name}/>
      ))}
    </View>
  );
}

export default InterestBubbleContainer;

const styles = StyleSheet.create({
  interestContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
})