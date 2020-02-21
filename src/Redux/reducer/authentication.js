import { LOGIN_SUCCESSFUL, AUTO_LOGOUT, SET_USER_AUTH } from "../type";


const initialState = {
    isAuthenticated: false,
    userDatails:[]
}

export default function(state=initialState, action){
    switch(action.type){
        case LOGIN_SUCCESSFUL:
            return{
                ...state,
                userDatails: action.payload,
            }
        case SET_USER_AUTH:
            return{
                ...state,
                isAuthenticated: action.payload,
            }
        case AUTO_LOGOUT:
            return{
                ...state,
                isAuthenticated: action.payload
            }
        default:
            return state;
    }
}