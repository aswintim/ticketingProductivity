import * as actionTypes from '../actionTypes';

const initialState = {
    loading: false,
    userId: null,
    idToken: null,
    error: null
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.AUTH_START:
            return{
                ...state,
                loading: true
            }

        case actionTypes.AUTH_SUCCESS:
            return{
                ...state,
                userId: action.userId,
                idToken: action.idToken,
                loading: false
            }

        case actionTypes.AUTH_FAIL:
            return{
                ...state,
                error: action.error,
                loading: false
            }

        default:
            return state;
    }
}

export default reducer;