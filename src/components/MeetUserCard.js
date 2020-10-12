import React from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';

let width;

const MeetUserCard = ({ params }) => {
  const window = useWindowDimensions();
  width = window / 5;

  return (
      <View style={styles.meetUserCard} />
  );
};

export default MeetUserCard;

const styles = StyleSheet.create({
  meetUserCard: {
    flex: 1,
    backgroundColor: '#f9c2ff',
    flexDirection: 'column',
    width: width,
    height: width,
    /*
    borderRadius: 20,
    padding: 30,*/
  },
});
