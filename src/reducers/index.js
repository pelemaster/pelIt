import { combineReducers } from 'redux'
import MafReducer from '../components/apps/Maf/MafReducer'
import appReducer from './appReducer'

export default combineReducers({
    maf: MafReducer,
    app: appReducer
})