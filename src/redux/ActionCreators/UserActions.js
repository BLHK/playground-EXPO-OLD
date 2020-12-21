import axios from "axios";
import Firebase from "../../FirebaseConfig";

export const USER = {
  UPDATE_EMAIL: "UPDATE_EMAIL",
  UPDATE_PASSWORD: "UPDATE_PASSWORD",
  LOGIN: "LOGIN",
  SIGNUP: "SIGNUP",
};

export const updateEmail = (email) => ({
  type: USER.UPDATE_EMAIL,
  payload: email,
});

export const updatePassword = (password) = ({
  type: USER.UPDATE_PASSWORD,
  payload: password,
});

export const login = () => {
  return async (dispatch, getState) => {
    try{
      const { email, password } = getState().user;
      const response = await Firebase.auth().signInWithEmailAndPassword(email,password);
      dispatch({type: USER.LOGIN, payload: response.user});
    }catch(e) {
      console.log(e);
    }
  }
}

export const signup = () => {
  return async(dispatch, getState) => {
    try{
      const {email, password} = getState.user;
      const response = await Firebase.auth().createUserWithEmailAndPassword(email, password);
      dispatch({type: USER.SIGNUP, payload: response.user});
    }catch (e) {
      console.log(e);
    }
  }
}