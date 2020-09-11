import * as actionTypes from '../actionTypes';

const initialState = {
    loading: false,
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
                loading: false
            }

        case actionTypes.AUTH_FAIL:
            return{
                ...state,
                error: action.error.message,
                loading: false
            }

        case actionTypes.AUTH_LOGOUT:
            console.log('Signed Out!!');
            return state;

        default:
            return state;
    }
}

export default reducer;