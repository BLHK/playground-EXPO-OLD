import Firebase, { db } from "../../FirebaseConfig";

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

export const updatePassword = (password) => ({
  type: USER.UPDATE_PASSWORD,
  payload: password,
});

export const signedIn = (isSignedIn) => ({
  type: USER.SIGNED_IN,
  payload: isSignedIn,
})

export const login = (email, password) => {
  return async (dispatch) => {
    try{
      const response = await Firebase.auth().signInWithEmailAndPassword(email, "apaapa");

      dispatch(getUser(response.user.uid));
    }catch(e) {
      console.log(e);
    }
  }
}

export const getUser = (uid) => {
  return async (dispatch) => {
    try {
      const user = await db
        .collection("users")
        .doc(uid)
        .get();

        dispatch({ type: USER.LOGIN, payload: user.data() })
    }catch(e){
      alert(e);
    }
  }
}

// export const signup = (email, password) => {
//   return async(dispatch) => {
//     try{
//       const response = await Firebase.auth().createUserWithEmailAndPassword(email, password);
//       if(response.user.uid) {
//         const user = {
//           uid: response.user.uid,
//           email: email,
//         }

//         db.collection("users")
//         .doc(user.uid)
//         .set(user);

//         dispatch({type: USER.SIGNUP, payload: user});
//       }
//     }catch (e) {
//       console.log(e);
//     }
//   }
// }