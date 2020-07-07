import * as actionTypes from '../actionTypes';
import axios from 'axios';

export const authFail = (err) => {
return{
    type: actionTypes.AUTH_FAIL,
    error: err
}
}


export const authSuccess = (token, userId) => {
return{
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId
}
}

export const authStart = () => {
    return{
        type: actionTypes.AUTH_START
    }
}


export const authLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('expirationTime');
    return{
        type: actionTypes.AUTH_LOGOUT
    }
}

export const checkAuthTimeout = (expirationTime) =>{
    return dispatch => {
        setTimeout(()=>{
            dispatch(authLogout())
        }, expirationTime*1000)
    }
}

export const authInit = (email, password, isSignUp) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email: email,
            password: password,
            returnSecureToken: true
        }

        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA4VQXraKSivVydizexhs9KKRtAEgJKBOs';
        if(!isSignUp){
            url= 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA4VQXraKSivVydizexhs9KKRtAEgJKBOs';
        }

        axios.post(url, authData).then(response=>{
            const expirationDate = new Date(new Date().getTime() + response.data.expiresIn*1000);
            localStorage.setItem('token', response.data.idToken);
            localStorage.setItem('userId', response.data.localId);
            localStorage.setItem('expirationDate', expirationDate)
            dispatch(authSuccess(response.data.idToken, response.data.localId));       //one is token and another is the id of the user
        }).catch(err=>{
            dispatch(authFail(err));
        })
    }
}

export const authCheckState = () => {
    return dispatch=>{
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    if(!token){
        dispatch(authLogout());
    }
    else{
        const expirationDate = new Date(localStorage.getItem('expirationDate'));
        if(expirationDate > new Date()){
            dispatch(authSuccess(token, userId));
            dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime())/1000))
        }
        else{
            dispatch(authLogout());
        }
    }
}
}