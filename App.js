import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/redux/Store";
import { COLORS } from "./src/Imports";

import UserScreen from "./src/screens/UserScreen";
import CameraScreen from "./src/screens/CameraScreen";
import ChatScreen from "./src/screens/ChatScreen";
import MeetScreen from "./src/screens/MeetScreen";
import MessagesScreen from "./src/screens/MessagesScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

import SignInScreen from './src/screens/authentication/SignInScreen';
import SignUpScreen from './src/screens/authentication/SignUpScreen';

import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

let isSignedIn = false;

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>

            {isSignedIn == false ? (
                <Stack.Screen name="Authentication" component={AuthNavigator}/>
            ) : (
              <>
              <Stack.Screen name="Tabs" component={TabNavigator} />
              <Stack.Screen name="Camera" component={CameraScreen} />
              <Stack.Screen
                name="User"
                component={UserScreen}
                options={{ headerShown: true }}
              />
              <Stack.Screen
                name="ChatScreen"
                component={ChatScreen}
                options={{ headerShown: true }}
              />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignInScreen} /> 
      <Stack.Screen name="SignUp" component={SignUpScreen} />
    </Stack.Navigator>
  )
}

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let highlightColor = focused
            ? (color = COLORS.PRIMARY)
            : COLORS.INACTIVE;

          switch (route.name) {
            case "Meet":
              return (
                <FontAwesome5
                  name="user-friends"
                  size={size}
                  color={highlightColor}
                />
              );
            case "Chat":
              return (
                <Ionicons
                  name="md-chatboxes"
                  size={32}
                  color={highlightColor}
                />
              );
            case "Profile":
              return (
                <FontAwesome5
                  name="user-alt"
                  size={size}
                  color={highlightColor}
                />
              );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: COLORS.PRIMARY,
        inactiveTintColor: COLORS.INACTIVE,
      }}
    >
      <Tab.Screen name="Meet" component={MeetScreen} />
      <Tab.Screen name="Chat" component={MessagesScreen} />
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
