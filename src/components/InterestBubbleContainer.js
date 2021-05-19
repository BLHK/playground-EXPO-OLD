import React from 'react';
import {connect} from "react-redux";
import {View, StyleSheet} from 'react-native';
import InterestBubble from './InterestBubble';

const InterestBubbleContainer = (props) => {
    return (
        <View style={styles.interestContainer}>
            {props.interestCollection.map(interest => (
                <InterestBubble key={interest.id} id={interest.id} text={interest.name}/>
            ))}
        </View>
    );
}

const mapStateToProps = (state) => {
  return {
      interestCollection: state.application.interestCollection,
  }
};

export default connect(mapStateToProps)(InterestBubbleContainer);

const styles = StyleSheet.create({
    interestContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
    },
})