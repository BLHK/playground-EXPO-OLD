import React, {useState} from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import {connect} from "react-redux";
import {setupInterestSelected} from "../redux/ActionCreators/ApplicationActions";

const InterestBubble = (props) => {
    const [pressed, setPressed] = useState(false)

    function pressHandler() {
        props.setupInterestSelected(props.id)
        setPressed(!pressed)
    }

    return (
            <Pressable style={[{ backgroundColor: pressed ? '#91a4ff' : '#00dede' }, styles.container ]} onPress={pressHandler}>
                <Text>{props.text}</Text>
            </Pressable>
    );
}

const mapDispatchToProps = {
    setupInterestSelected: setupInterestSelected,
};

export default connect(null ,mapDispatchToProps)(InterestBubble);

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        padding: 10,
        margin: 2,
    }
})