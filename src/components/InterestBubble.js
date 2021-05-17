import React, {useState} from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';

const InterestBubble = (props) => {
    const [pressed, setPressed] = useState(false)
    return (
            <Pressable style={[{ backgroundColor: pressed ? '#91a4ff' : '#00dede' }, styles.container ]} onPress={() => setPressed(!pressed)}>
                <Text>{props.text}</Text>
            </Pressable>
    );
}

export default InterestBubble;

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        padding: 10,
        margin: 2,
    }
})