import React from 'react';
import {View, StyleSheet} from 'react-native';
import InterestBubble from './InterestBubble';

const InterestBubbleContainer = (props) => {
    return (
        <View style={styles.interestContainer}>
            {props.interests.map(interest => (
                <InterestBubble key={interest.id} text={interest.name} selected={interest.selected}/>
            ))}
        </View>
    );
}

export default InterestBubbleContainer;

const styles = StyleSheet.create({
    interestContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
    },
})