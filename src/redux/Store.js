import {combineReducers} from "redux";
import {persistStore, persistReducer} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ReduxThunk from "redux-thunk";
import {configureStore} from '@reduxjs/toolkit'

import userReducer from '../redux/reducers/UserReducer';
import usersReducer from "../redux/reducers/UsersReducer";
import modalReducer from "../redux/reducers/ModalReducer";
import applicationReducer from "../redux/reducers/ApplicationReducer";

function logger({getState}) {
    return (next) => (action) => {
        console.log("will dispatch", action);
        const returnValue = next(action);
        //console.log("state after dispatch", getState());

        return returnValue;
    };
}

const reducers = combineReducers({
    user: userReducer,
    users: usersReducer,
    modal: modalReducer,
    application: applicationReducer,
});

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
    whitelist: ["users"],
    blacklist: ["modal", "application"],
};

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [ReduxThunk, logger]
})

let persistor = persistStore(store);

export {store, persistor};
