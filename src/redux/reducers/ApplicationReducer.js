import {APPLICATION} from "../ActionCreators/ApplicationActions";

const initialState = {
    loading: false,
    interestCollection: [
        {id: 1, name: "Gym"},
        {id: 2, name: "Reading"},
        {id: 3, name: "Going to the cinema"},
        {id: 4, name: "Studying"},
    ],
    selectedInterests: [],
    setupUserImages: [],
    setupContinueButton: true,
    setupUsernameTextField: "",
};

const ApplicationReducer = (state = initialState, action) => {
    switch (action.type) {
        case APPLICATION.SETUP_INTEREST_COLLECTION:
            return {
                ...state,
                interestCollection: {...action.payload}
            }
        case APPLICATION.SETUP_INTEREST_SELECTED:
            return {
                ...state,
                selectedInterests:
                    (state.selectedInterests.includes(action.payload) ?
                    state.selectedInterests.filter(e => e !== action.payload) :
                    [...state.selectedInterests, action.payload])
            }
        case APPLICATION.SETUP_ADD_USER_IMAGES:
            return {
                ...state,
                setupUserImages: [...state.setupUserImages, action.payload]
            }
        case APPLICATION.SETUP_SET_CONTINUE_BUTTON:
            return {
                ...state,
                setupContinueButton: action.payload
            }
        case APPLICATION.SETUP_SET_USERNAME_TEXT_FIELD:
            return {...state, setupUsernameTextField: action.payload}
        default:
            return state
    }
}

export default ApplicationReducer;