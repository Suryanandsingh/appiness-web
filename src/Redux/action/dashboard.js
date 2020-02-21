import { EMPLOYEEE_DETAILS } from "../type"
import { EMPLOPYEE_DETAILS_DATA } from '../Data/employeesDetails';



export function getEmployeeDeatils(history){
    return dispatch=>{
        if(localStorage.getItem('ISAUTH')){
            dispatch({
                type: EMPLOYEEE_DETAILS,
                payload: EMPLOPYEE_DETAILS_DATA.user
            })
        }else{
            history.push('/login')
        }
    }
}