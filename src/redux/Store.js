import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { composeWithDevTools } from "redux-devtools-extension";

import ReduxThunk from "redux-thunk";
import rootReducer from "./reducers/index";

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

const middleware = applyMiddleware(ReduxThunk, logger);

const store = createStore(persistedReducer, composeWithDevTools(middleware));

let persistor = persistStore(store);

export { store, persistor };
