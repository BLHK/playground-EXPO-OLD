import Firebase, {db} from "../FirebaseConfig";
import {loading, USER} from "../redux/ActionCreators/UserActions";

export const getUser = (uid) => {
    return async (dispatch) => {
        try {
            const user = await db
                .collection("users")
                .doc(uid)
                .get();

            dispatch({type: USER.LOGIN, payload: user.data()})
        } catch (e) {
            alert(e);
        }
    }
};

export const signUpWithEmail = (email, password) => {
    return async () => {
        try {
            await Firebase.auth().createUserWithEmailAndPassword(email, password)
                .catch(function(error) {
                    let errorCode = error.code;
                    let errorMessage = error.message;
                    if (errorCode === 'auth/weak-password') {
                        alert(errorMessage);
                    } else if (errorCode === 'auth/invalid-email') {
                        alert('Email is not valid.');
                    } else {
                        alert(errorMessage);
                    }
                    console.log(error);
                });
            // if (response.user.uid) {
            //     const newUser = {
            //         uid: response.user.uid,
            //         email: email,
            //     }
            //     console.log("got here");
                
            //     await db.collection("users")
            //         .doc(response.user.uid)
            //         .set(newUser);

            //     dispatch({type: USER.SIGNUP_WITH_EMAIL, payload: newUser});
            // }
        } catch (e) {
          console.log(e.toString());
        }
    }
};

//Skapa funktion för att lägga till data till firestore.
export const updateUserDetails = (userDetails) => {
    return async (dispatch) => {
        try {
            let user = Firebase.auth().currentUser;
            //let userDetails = {
            //    username: userDetails.username,
            //    images: userDetails.images,
            //    interests: userDetails.interests,
            //};

            user.getIdToken().then(idToken => {
            let userRef = db.collection("users").doc(idToken).set(userDetails);
            dispatch({type: USER.UPDATE_USER_DETAILS, payload: userDetails});

            console.log(userRef);
        });
        } catch (e) {
          console.log(e);
        }
    }
};

export const login = (email, password) => {
    return async (dispatch) => {
        try {
            dispatch(loading(true));

            const response = await Firebase.auth().signInWithEmailAndPassword(email, password);

            dispatch(getUser(response.user.uid));
        } catch (e) {
            console.log(e);
        } finally {
            dispatch(loading(false));
        }
    }
};

export const logout = () => {
    return async () => {
        try {
            await Firebase.auth().signOut()
        } catch (e) {
            alert(e);
        }
    }
};
