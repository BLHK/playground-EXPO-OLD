import {USER} from "../ActionCreators/UserActions";

const initialState = {
    loggedIn: false,
    loading: false,
    user: {},
};

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER.SIGNUP:
            return {
                ...state,
                loggedIn: true,
                user: {...action.payload}
            }
        case USER.LOGIN:
            return {
                ...state,
                loggedIn: true,
                user: {...action.payload}
            }
        case USER.LOGOUT:
            return {
                ...state,
                loggedIn: false,
                user: {},
            }
        case USER.UPDATE_EMAIL:
            return {...state, email: action.payload}
        case USER.UPDATE_PASSWORD:
            return {...state, password: action.payload}
        case USER.LOADING:
            return {...state, loading: action.payload}
        case USER.UPDATE_LOCATION:
            return {...state, user: {...state.user, location: action.payload}}
        default:
            return state
    }
}

export default UserReducer;