import {USER} from "../ActionCreators/UserActions";

const initialState = {
    loading: false,
    profileCompleted: false,
    user: {},
    userDetails: {},
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER.SIGNUP_WITH_EMAIL:
            return {
                ...state,
                user: {...action.payload}
            };
        case USER.LOGIN:
            return {
                ...state,
                user: {...action.payload}
            };
        case USER.LOGOUT:
            return {
                ...state,
                profileCompleted: false,
                user: {},
            };
        case USER.UPDATE_EMAIL:
            return {...state, email: action.payload};
        case USER.UPDATE_PASSWORD:
            return {...state, password: action.payload};
        case USER.LOADING:
            return {...state, loading: action.payload};
        case USER.UPDATE_LOCATION:
            return {...state, user: {...state.user, location: action.payload}};
        case USER.UPDATE_USER_DETAILS:
            return {...state, userDetails: {...action.payload}};
        default:
            return state
    }
};

export default UserReducer;