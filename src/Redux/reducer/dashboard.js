import { EMPLOYEEE_DETAILS } from "../type";


const initialState = {
    employeeDetails:[]
}

export default function(state=initialState, action){
    switch(action.type){
        case EMPLOYEEE_DETAILS:
            return{
                ...state,
                employeeDetails: action.payload
            }
        default:
            return state;
    }
}
