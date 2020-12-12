import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";

import ReduxThunk from "redux-thunk";
import rootReducer from "./reducers";

function logger({ getState }) {
  return (next) => (action) => {
    console.log("will dispatch", action);
    const returnValue = next(action);
    console.log("state after dispatch", getState());

    return returnValue;
  };
}

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["users"],
  blacklist: ["modal"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  persistedReducer,
  composeEnhancer(applyMiddleware(ReduxThunk, logger))
  //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

let persistor = persistStore(store);

export { store, persistor };
