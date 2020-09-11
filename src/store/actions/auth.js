import * as actionTypes from '../actionTypes';

export const authLogout = () => {
    return(dispatch, getState, {getFirebase})=>{
        const firebase = getFirebase();
        firebase.auth().signOut().then(()=>dispatch({type: actionTypes.AUTH_LOGOUT}))
    }
}



export const authInit = (email, password, isSignUp) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        if(!isSignUp){
        firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
            dispatch({type: actionTypes.AUTH_START})
            dispatch({type: actionTypes.AUTH_SUCCESS})
        }).catch(err=>{dispatch({type: actionTypes.AUTH_FAIL, error: err})})}
        else{
            firebase.auth().createUserWithEmailAndPassword(email, password).then(()=>{
                dispatch(()=>dispatch({type: actionTypes.AUTH_SUCCESS}))
            }).catch(err=>{dispatch({type:actionTypes.AUTH_FAIL, error:err})})
        }
    }
}

