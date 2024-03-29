import React from "react";
import {StyleSheet, View, Text, Image} from "react-native";

const ConversationCard = ({params}) => {
    return (
        <View style={styles.background}>
            <View style={styles.conversationCard}>
                <Image
                    style={styles.profilePicture}
                    source={{uri: params.user.images[0]}}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.nameField}>{params.user.name} </Text>
                    <View style={styles.messageContainer}>
                        <Text numberOfLines={1}>{params.message}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default ConversationCard;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#F0F0F0",
        marginHorizontal: 10,
        marginVertical: 5,
    },
    conversationCard: {
        flex: 1,
        backgroundColor: "#00dede",
        flexDirection: "row",
        flexWrap: "wrap",
        borderRadius: 20,
        padding: 10,
    },
    textContainer: {
        flex: 1,
        justifyContent: "space-evenly",
        marginHorizontal: 10,
    },
    profilePicture: {
        width: 70,
        height: 70,
        borderRadius: 50,
    },
    nameField: {
        fontWeight: "bold",
    },
    messageContainer: {
        backgroundColor: "white",
        padding: 5,
        borderRadius: 12,
    },
});
