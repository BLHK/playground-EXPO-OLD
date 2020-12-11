import React from "react";
import { View, Image, ScrollView, Dimensions, StyleSheet } from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

const ImageSwiper = (params) => {
  console.log(deviceHeight);
  console.log(deviceWidth);
  return (
    <View style={styles.container}>
      <Image
        style={{
          height: deviceHeight / 2,
          width: deviceWidth,
        }}
        source={require("../../assets/500full-igor-bogdanoff.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ImageSwiper;
