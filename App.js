import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/redux/Store";
import { Screens, COLORS } from "./src/Imports";

import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Tabs" component={TabNavigator} />
            <Stack.Screen name="Camera" component={Screens.Camera} />
            <Stack.Screen
              name="User"
              component={Screens.User}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="ChatScreen"
              component={Screens.Chat}
              options={{ headerShown: true }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
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
            case "MessagesScreen":
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
      <Tab.Screen name="Meet" component={Screens.Meet} />
      <Tab.Screen name="MessagesScreen" component={Screens.Messages} />
      <Tab.Screen name="Profile" component={Screens.Profile} />
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
