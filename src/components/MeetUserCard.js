import React from "react";
import { StyleSheet, View, Text, Dimensions, Image } from "react-native";

let cellWidth;

const MeetUserCard = ({ params }) => {
  cellWidth = Dimensions.get("window").width / 3.4;

  return (
    <View style={styles.container}>
      <Image
        source={params.image}
        style={{ height: cellWidth, width: cellWidth, borderRadius: 60 }}
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
