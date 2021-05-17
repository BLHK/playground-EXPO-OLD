import React, {useState, useEffect} from 'react';

import Firebase from '../src/FirebaseConfig';
import {connect} from 'react-redux';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createStackNavigator} from "@react-navigation/stack";

import UserScreen from "./screens/UserScreen";
import CameraScreen from "./screens/CameraScreen";
import ChatScreen from "./screens/ChatScreen";
import MeetScreen from "./screens/MeetScreen";
import MessagesScreen from "./screens/MessagesScreen";
import ProfileScreen from "./screens/ProfileScreen";

import SignInScreen from './screens/authentication/SignInScreen';
import SignUpScreen from './screens/authentication/SignUpScreen';
import ProfileSetupScreen from './screens/authentication/ProfileSetupScreen';

import {FontAwesome5} from "@expo/vector-icons";
import {Ionicons} from "@expo/vector-icons";
import {COLORS} from "./Imports";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AppNavigation = (props) => {
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    //if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = Firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>

                {!user ? (
                    <Stack.Screen name="Authentication" component={AuthNavigator}/>
                ) : (
                    <>
                        <Stack.Screen name="Tabs" component={TabNavigator}/>
                        <Stack.Screen name="Camera" component={CameraScreen}/>
                        <Stack.Screen
                            name="User"
                            component={UserScreen}
                            options={{headerShown: true}}
                        />
                        <Stack.Screen
                            name="ChatScreen"
                            component={ChatScreen}
                            options={{headerShown: true}}
                        />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const AuthNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="SignIn" component={SignInScreen}/>
            <Stack.Screen name="ProfileSetup" component={ProfileSetupScreen}/>
            <Stack.Screen name="SignUp" component={SignUpScreen}/>
        </Stack.Navigator>
    )
}

const TabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
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
            <Tab.Screen name="Meet" component={MeetScreen}/>
            <Tab.Screen name="Chat" component={MessagesScreen}/>
            <Tab.Screen name="Profile" component={ProfileScreen}/>
        </Tab.Navigator>
    );
};

const mapStateToProps = (state) => {
    return {
        loggedIn: state.user.loggedIn
    }
}

export default connect(mapStateToProps)(AppNavigation);