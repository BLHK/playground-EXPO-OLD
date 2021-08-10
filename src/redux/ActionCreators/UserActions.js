import Firebase, {db} from "../../FirebaseConfig";

export const USER = {
    UPDATE_EMAIL: "UPDATE_EMAIL",
    UPDATE_PASSWORD: "UPDATE_PASSWORD",
    SIGNUP_WITH_EMAIL: "SIGNUP_WITH_EMAIL",
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
    LOADING: "LOADING",
    UPDATE_LOCATION: "UPDATE_LOCATION",
    UPDATE_USER_DETAILS: "UPDATE_USER_DETAILS",
};

export const updateEmail = (email) => ({
    type: USER.UPDATE_EMAIL,
    payload: email,
});

export const updatePassword = (password) => ({
    type: USER.UPDATE_PASSWORD,
    payload: password,
});

export const loading = (isLoading) => ({
    type: USER.LOADING,
    payload: isLoading,
});

export const updateUserLocation = (location) => ({
    type: USER.UPDATE_LOCATION,
    payload: location,
});

export const updateUserDetailsNow = (userDetails) => ({
    type: USER.UPDATE_USER_DETAILS,
    payload: userDetails,
});

export const updateUserDetails = (userDetails) => {
    return async (dispatch) => {
        try {
            let user = Firebase.auth().currentUser;

            user.getIdToken().then(
                idToken => {
                let userRef = db.collection("users").doc(idToken).set(userDetails)
                    .then(
                        dispatch(updateUserDetailsNow(userDetails))
                    );
                console.log(userRef);
            });
        } catch (e) {
            console.log(e);
        }
    }
};