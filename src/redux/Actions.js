import { GET_USERS, GENERATE_USER } from "./ActionTypes";
import axios from "axios";
import { db, getServerTimeStamp } from "../config/FirebaseConfig";

let firstImage = "/assets/500full-igor-bogdanoff.jpg";
// let secondImage = require("https://i.picsum.photos/id/756/150/150.jpg?hmac=A1Rg1RUy9gXoalEUMGE-qTjV3FmO-Fj4rQDtua7HYvU");

export const USERS = {
  FETCH_USERS_REQUEST: "FETCH_USERS_REQUEST",
  FETCH_USERS_SUCCESS: "FETCH_USERS_SUCCESS",
  FETCH_USERS_FAILURE: "FETCH_USERS_FAILURE",

  POST_USER_REQUEST = "POST_USER_REQUEST",
  POST_USER_SUCCESS = "POST_USER_SUCCESS",
  POST_USER_ERROR = "POST_USER_ERROR",
};

export const fetchUsersRequest = () => ({
  type: USERS.START_FETCH,
});

export const fetchUsersSuccess = (users) => ({
  type: USERS.FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersFailure = (error) => ({
  type: USERS.FETCH_USERS_FAILURE,
  payload: error,
});

export const postUser = () => {
  user = {
    gender: "male",
    name: "George",
    preferences: ["female", "male"],
    images: [firstImage, firstImage],
    interests: ["Hiking", "Partying", "Video games"],
    dateOfBirth: new Date("August 10, 1994"),
    lastActive: Date.now(),
    blockedUsers: ["xxxxxxxxxxX", "xxxxxxxxxxY"],
  };

  return function (dispatch) {
    db.collection("users")
      .add(user)
      .then(function (docRef) {
        console.log("Document written with ID:", docRef.id);
      })
      .catch(function (error) {
        console.error("Error writing to document: ", error);
      });
  };
};

// export const fetchUsers = () => {
//   return function (dispatch) {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         //response.data is the array of users
//         const users = response.data.map((user) => user.id);
//         console.log("Receieved users", users);
//         dispatch(fetchUsersSuccess(users));
//       })
//       .catch((error) => {
//         //response.error is the description of the error
//         dispatch(error.FETCH_USERS_FAILURE(error.message));
//       });
//   };
// };
