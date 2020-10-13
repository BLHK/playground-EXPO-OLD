import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  Button,
  StyleSheet,
  Platform,
} from "react-native";
import { Camera } from "expo-camera";

const CameraScreen = (props) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.front);
  const [ratios, setRatios] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  useEffect(() => {
    if (Platform.OS === "android") {
      (async () => {
        const { ratios } = await Camera.getSupportedRatiosAsync();
        setRatios(ratios);
      })();
    }
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <Camera style={{ flex: 1 }} type={type}>
        <View
          style={{
            flex: 1,
            backgroundColor: "transparent",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Button
            title="Flip"
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          />
          <Button
            title="Go back!"
            style={styles.backButton}
            onPress={() => props.navigation.goBack()}
          />
          <Button
            title="log"
            style={styles.backButton}
            onPress={() => console.log(ratios)}
          />
        </View>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backButton: {},
});

export default CameraScreen;
