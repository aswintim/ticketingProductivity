import * as actionTypes from '../actionTypes';
// import {db} from '../../services/firebase';


export const ticketAced = (id) =>{
    return (dispatch, getState, {getFirebase, getFirestore})=>{
        const firestore = getFirestore();
        // let doc1 = 0;

        const docu = firestore.collection('tickets').doc(id).get().then(ret=>{
            let metad = {};
            firestore.collection('tickets').doc(id).collection('comment').get().then(snap=>{
                
                const ticks = [];
                    snap.forEach(doc=>{
                        let dat = doc.data();
                        ticks.push({...dat, id: doc.id});
                        doc.ref.delete();
                    })
                 metad = {...ret.data(), comment: {...ticks}};
            }).then(()=>{
                firestore.collection('aced').add(metad).catch(err=>{
                    console.log(err);
                })
            }).then(()=>{
                firestore.collection('tickets').doc(id).delete();
            })
        })
        //code for deleting the document from tickets
    }
}

export const ticketFailed = (id) =>{
    return (dispatch, getState, {getFirebase, getFirestore})=>{
        const firestore = getFirestore();
        // let doc1 = 0;

        const docu = firestore.collection('tickets').doc(id).get().then(ret=>{
            let metad = {};
            firestore.collection('tickets').doc(id).collection('comment').get().then(snap=>{
                
                const ticks = [];
                    snap.forEach(doc=>{
                        let dat = doc.data();
                        ticks.push({...dat, id: doc.id});
                        doc.ref.delete();
                    })
                 metad = {...ret.data(), comment: {...ticks}};
            }).then(()=>{
                firestore.collection('failed').add(metad).catch(err=>{
                    console.log(err);
                })
            }).then(()=>{
                firestore.collection('tickets').doc(id).delete();
            })
        })
        //code for deleting the document from tickets
    }
}



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
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('tickets').where("userId","==", getState.auth.userId).get().then(
            snapshot=>{
                const ticks = [];
                snapshot.forEach(doc=>{
                    let dat = doc.data();
                    ticks.push({...dat, id:doc.id})
                })
                console.log(ticks);
                dispatch(setPosts(ticks))
            }
        ).catch(err=>{
            dispatch(fetchPostsError(err));
        })
    }
}

export const addNewTicketSuccess = (newTics) => {
    return{
        type: actionTypes.ADD_NEW_TICKET_SUCCESS,
        newTicket: newTics
    }
}

export const addNewTicketFailed = (error) => {
    return{
        type: actionTypes.ADD_NEW_TICKET_FAILED,
        error: error
    }
}


export const addNewTicket = (data) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        //async code
        const firestore = getFirestore();
        firestore.collection('tickets').add({...data}).then(()=>{
            dispatch(addNewTicketSuccess(data));
        }).catch(err=>{
            dispatch(addNewTicketFailed(err));
        })
        
    }
}