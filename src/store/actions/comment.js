import * as actionTypes from '../actionTypes';

export const submitCommentSuccess = (res) => {
    return{
        type: actionTypes.SUBMIT_COMMENT_SUCCESS,
        response: res
    }
}

export const submitCommentError = (err) => {
    return{
        type: actionTypes.SUBMIT_COMMENT_ERROR,
        error: err
    }
}

export const submitCommentHandler = (comment, id) => {
    return (dispatch, getState, {getFirebase, getFirestore})=>{
        const firestore= getFirestore();
        firestore.collection('tickets').doc(id).collection('comment').add({
            comment: comment,
            time: new Date()
        }).then((res)=>{
            dispatch(submitCommentSuccess(res.data));
        }).catch(err=>{
            dispatch(submitCommentError(err));
        })
    }
}

export const getCommentsSuccess = (response) => {
    return{
        type: actionTypes.GET_COMMENT_SUCCESS,
        response: response
    }
}

export const getCommentsError = (error) => {
    return{
        type: actionTypes.GET_COMMENT_ERROR,
        error: error
    }
}

export const getComments = (id) => {
    return(dispatch, getState, {getFirebase, getFirestore})=>{
        const firestore = getFirestore();
        firestore.collection('tickets').doc(id).collection('comment').orderBy('time', 'desc').get().then(snapshot=>{
            const comms = [];
            snapshot.forEach(doc=>{
                let com = doc.data();
                comms.push(com);
            })
            dispatch(getCommentsSuccess(comms));
        }).catch(err=>{
            dispatch(getCommentsError(err));
        })
    }
}