import * as actionTypes from '../actionTypes';
import {db} from '../../services/firebase';


export const setPosts = (tickets) => {
    return{
        type: actionTypes.SET_POSTS,
        tickets: tickets
    }
}

export const fetchPostsError = (error) =>{
    return{
        type: actionTypes.FETCH_POSTS_FAILED,
        error: error
    }
}


export const initPosts = () => {
    return dispatch => {
        db.collection('tickets').orderBy('time')
        .get()
        .then(snapshot=>{
            const ticks = [];
            snapshot.forEach(doc=>{
                let dat = doc.data();
                ticks.push({...dat, id:doc.id});
            })
            console.log(ticks);
            dispatch(setPosts(ticks));
        })
        .catch(error=>{
            dispatch(fetchPostsError(error));
        })
    }
}