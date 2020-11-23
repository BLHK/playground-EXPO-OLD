import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import Store from "./src/redux/Store";
import MeetScreen from "./src/screens/MeetScreen";
import MessagesScreen from "./src/screens/MessagesScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import CameraScreen from "./src/screens/CameraScreen";
import ChatScreen from "./src/screens/ChatScreen";

import * as firebase from "firebase";
//import "firebase/firestore";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyAS0DrBy83DboPgaZq0Ue--k2b6YNNGsgA",
  authDomain: "playground-expo.firebaseapp.com",
  databaseURL: "https://playground-expo.firebaseio.com",
  projectId: "playground-expo",
  storageBucket: "playground-expo.appspot.com",
  messagingSenderId: "745612227818",
  appId: "1:745612227818:web:2308d59f9f343f4df41393",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Tabs" component={TabNavigator} />
          <Stack.Screen name="Camera" component={CameraScreen} />
          <Stack.Screen
            name="ChatScreen"
            component={ChatScreen}
            options={{ headerShown: true }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Meet" component={MeetScreen} />
      <Tab.Screen name="MessagesScreen" component={MessagesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

/*const ProfileNavigator = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="MainProfile" component={ProfileScreen} />
      <Stack.Screen name="Camera" component={CameraScreen} />
    </Stack.Navigator>
  );
};*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
