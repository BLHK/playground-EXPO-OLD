export const USER = {
    UPDATE_EMAIL: "UPDATE_EMAIL",
    UPDATE_PASSWORD: "UPDATE_PASSWORD",
    SIGNUP_WITH_EMAIL: "SIGNUP_WITH_EMAIL",
    LOGIN: "LOGIN",
    LOGOUT: "LOGOUT",
    LOADING: "LOADING",
    UPDATE_LOCATION: "UPDATE_LOCATION",
    ADD_USER_DETAILS: "ADD_USER_DETAILS",
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

export const loading = (isLoading) => ({
    type: USER.LOADING,
    payload: isLoading,
})

export const updateUserLocation = (location) => ({
    type: USER.UPDATE_LOCATION,
    payload: location,
})

export const addUserDetails = (userDetails) => ({
    type: USER.ADD_USER_DETAILS,
    payload: userDetails,
})