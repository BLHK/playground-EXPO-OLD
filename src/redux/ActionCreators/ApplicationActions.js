export const APPLICATION = {
    SETUP_INTEREST_SELECTED: "SETUP_SELECT_INTEREST_SELECTED",
    SETUP_ADD_USER_IMAGES: "SETUP_ADD_USER_IMAGES",
    SETUP_SET_CONTINUE_BUTTON: "SETUP_SET_CONTINUE_BUTTON",
    SETUP_SET_USERNAME_TEXT_FIELD: "SETUP_SET_USERNAME_TEXT_FIELD",
};

export const setupInterestSelected = (interestId) => ({
    type: APPLICATION.SETUP_INTEREST_SELECTED,
    payload: interestId,
});

export const setupAddUserImages = (userImages) => ({
    type: APPLICATION.SETUP_ADD_USER_IMAGES,
    payload: userImages,
});

export const setupSetContinueButton = (value) => ({
    type: APPLICATION.SETUP_SET_CONTINUE_BUTTON,
    payload: value,
});

export const setupSetUsernameTextField = (username) => ({
    type: APPLICATION.SETUP_SET_USERNAME_TEXT_FIELD,
    payload: username,
});