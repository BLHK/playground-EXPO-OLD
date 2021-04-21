import React from "react";
import {StyleSheet, View, Text, Dimensions, Image} from "react-native";

let imageDimension;

const MeetUserCard = ({params}) => {
    imageDimension = Dimensions.get("window").width / 3.4;
    return (
        <View style={styles.container}>
            <Image
                source={{uri: params.images[0]}}
                style={{height: imageDimension, width: imageDimension, borderRadius: 60}}
            />
            <Text style={styles.text}>{params.name}</Text>
        </View>
    );
};

export default MeetUserCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    text: {
        color: "#4f4f4f",
    },
});
