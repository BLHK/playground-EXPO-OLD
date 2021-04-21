import axios from "axios";
import {db} from "../../FirebaseConfig";

let firstImage =
    "https://i.picsum.photos/id/517/200/200.jpg?hmac=7n69zdD4qSZs14zMRZPUfLGKHFEIR9jTpoSEN1o990E";
// let secondImage = require("https://i.picsum.photos/id/756/150/150.jpg?hmac=A1Rg1RUy9gXoalEUMGE-qTjV3FmO-Fj4rQDtua7HYvU");

export const USERS = {
    GET_USERS_REQUEST: "GET_USERS_REQUEST",
    GET_USERS_SUCCESS: "GET_USERS_SUCCESS",
    GET_USERS_FAILURE: "GET_USERS_FAILURE",

    POST_USER_REQUEST: "POST_USER_REQUEST",
    POST_USER_SUCCESS: "POST_USER_SUCCESS",
    POST_USER_ERROR: "POST_USER_ERROR",
};

export const getUsersRequest = () => ({
    type: USERS.GET_USERS_REQUEST,
});

export const getUsersSuccess = (users) => ({
    type: USERS.GET_USERS_SUCCESS,
    payload: users,
});

export const getUsersFailure = (error) => ({
    type: USERS.GET_USERS_FAILURE,
    payload: error,
});

export const getUserById = (id) => { // TODO Id is never referenced
    return function () {
        const result = db
            .collection("users")
            .doc("YpYqQFlaMiZmhAGQDdip")
            .get()
            .then((docRef) => {
                console.log(docRef.id, " => ", docRef.data());
            })
            .catch((error) => {
                console.log("Error getting user by ID: ", error);
            });
    };
};

export const getUsers = () => {
    console.log("getUsers fired---------------------------");
    return function (dispatch) {
        dispatch(getUsersRequest());
        let users = [];
        db.collection("users")
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    users.push({id: doc.id, user: doc.data()});
                });
                dispatch(getUsersSuccess(users));
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
                dispatch(getUsersFailure());
            });
    };
};

export const postUser = () => {
    let user = {
        gender: "male",
        name: "George",
        preferences: ["female", "male"],
        images: [firstImage, firstImage],
        interests: ["Hiking", "Partying", "Video games"],
        dateOfBirth: new Date("August 10, 1994"),
        lastActive: Date.now(),
        blockedUsers: ["xxxxxxxxxxX", "xxxxxxxxxxY"],
    };

    return function () {
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
