import * as actionTypes from '../actionTypes';

const initialState = {
    tickets: null,
    error: null,
    newTicket: null
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.SET_POSTS:
            return{
                ...state,
                tickets: action.tickets
            }

        case actionTypes.FETCH_POSTS_FAILED:
            return{
                ...state, 
                error: action.error
            }

        case actionTypes.ADD_NEW_TICKET_SUCCESS:
            return{
                ...state,
                newTicket: action.newTicket
            }

        case actionTypes.ADD_NEW_TICKET_FAILED:
            return{
                ...state,
                error: action.error
            }

        default:
            return state;
        
    }
}

export default reducer;