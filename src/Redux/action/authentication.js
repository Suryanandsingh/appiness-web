import { MAIL } from '../../Constant';
import { USER1 } from '../Data/userDetails';
import { LOGIN_SUCCESSFUL } from '../type';


async function storeToken(accessToken) {
    try {
        await localStorage.setItem('ISAUTH', accessToken);
    } catch (error) {
        console.log('localStorage Error: ' + error.message);
    }
}

export function login(username, password, history){
    return dispatch => {
        if(!MAIL.test(username)){
            alert('Invalid email')
        }else if(password.length<5){
            alert('Password should contain at least 5 characters.')
        }else{
            if(username === USER1.username && password === USER1.password){
                //user information
                dispatch({
                    type: LOGIN_SUCCESSFUL,
                    payload: USER1
                })
                storeToken(true);
                history.push('/')
            }else{
                alert('Wrong credentials!')
            }
        }
    }
}

export function isUserLoggedIn(){}

export function autoLogout(){
    return dispatch => {
        localStorage.removeItem('ISAUTH')
    }
}