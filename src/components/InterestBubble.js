import React, {useState} from 'react';
import {Text, Pressable, StyleSheet} from 'react-native';
import {connect} from "react-redux";
import {setInterestSelected} from "../redux/ActionCreators/ApplicationActions";

const InterestBubble = (props) => {
    const [pressed, setPressed] = useState(false)

    function pressHandler() {
        console.log("AAAAA");
        console.log(props);
        props.setInterestSelected(props.id)
        setPressed(!pressed)
    }

    return (
            <Pressable style={[{ backgroundColor: pressed ? '#91a4ff' : '#00dede' }, styles.container ]} onPress={pressHandler}>
                <Text>{props.text}</Text>
            </Pressable>
    );
}

const mapDispatchToProps = {
    setInterestSelected,
};

export default connect(null ,mapDispatchToProps)(InterestBubble);

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        padding: 10,
        margin: 2,
    }
})