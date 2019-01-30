import {
    MAF_GET_PROC,
    MAF_GET_BACKLOG
} from '../../../actions/types'

const INITIAL_STATE = {
    'proc': [],
    'backlog': []
}

export default (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case MAF_GET_PROC:
            // action.payload : Array of process statuses
            return  {...state,  'proc': action.payload }
        case MAF_GET_BACKLOG:
            return { ...state, 'backlog': [{'UVOICE': 20}, {'TMM': 33}]}
        default:
            return state;
    }
}