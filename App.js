import React from "react";
import { LogBox } from 'react-native';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {store, persistor} from "./src/redux/Store";
import AppNavigation from './src/AppNavigation';

export default function App() {
    LogBox.ignoreAllLogs();
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <AppNavigation/>
            </PersistGate>
        </Provider>
    );
}