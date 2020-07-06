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
    return{
        type: actionTypes.AUTH_LOGOUT
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
            dispatch(authSuccess(response.data.idToken, response.data.localId));       //one is token and another is the id of the user
        }).catch(err=>{
            dispatch(authFail(err));
        })
    }
}