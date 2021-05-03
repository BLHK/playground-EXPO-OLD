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
}

export const signupWithEmail = (email, password) => {
    return async (dispatch) => {
        try {
            const user = await Firebase.auth().createUserWithEmailAndPassword(email, password)
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

            if (user.uid) {
                const user = {
                    uid: response.user.uid,
                    email: email,
                }

                await db.collection("users")
                    .doc(user.uid)
                    .set(user);

                dispatch({type: USER.SIGNUP_WITH_EMAIL, payload: user});
            }
        } catch (e) {
            console.log(e.toString());
        }
    }
}

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
}

export const logout = () => {
    return async (dispatch) => {
        try {
            Firebase.auth().signOut().then(() => {
                dispatch({type: USER.LOGOUT})
            })
        } catch (e) {
            alert(e);
        }
    }
}
