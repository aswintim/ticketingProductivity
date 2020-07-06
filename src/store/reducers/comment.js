import * as actionTypes from '../actionTypes';

const initialState = {
    sendComment:  null,
    sendCommentError: null,
    getComments: null,
    getCommentsError: null
}

const reducer = (state=initialState, action)=>{
    switch(action.type){
        case actionTypes.SUBMIT_COMMENT_SUCCESS:
            return{
                ...state,
                sendComment: action.response
            }

        case actionTypes.SUBMIT_COMMENT_ERROR:
            return{
                ...state,
                sendCommentError: action.error
            }

        case actionTypes.GET_COMMENT_SUCCESS:
            return{
                ...state,
                getComments: action.response
            }

        case actionTypes.GET_COMMENT_ERROR:
            return{
                ...state,
                getCommentsError: action.error
            }

        default:
            return state;
    }
}


export default reducer;