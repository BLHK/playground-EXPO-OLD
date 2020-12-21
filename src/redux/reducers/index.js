import { combineReducers } from "redux";
import userReducer from './UserReducer';
import usersReducer from "./UsersReducer";
import modalReducer from "./ModalReducer";

export default combineReducers({user: userReducer, users: usersReducer, modal: modalReducer });
