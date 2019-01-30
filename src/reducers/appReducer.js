import {
    GET_APP_PARAMS,
    SET_APP_ERROR
} from '../actions/types'

const INITIAL_STATE = {
    'env': {},
    'error': {}
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_APP_PARAMS:
            // action.payload : Array of process statuses
            console.log(action)
            return  {...state,  'env': action.payload }
        case SET_APP_ERROR:
            return {...state, 'error': action.payload }
        default:
            return state;
    }
}