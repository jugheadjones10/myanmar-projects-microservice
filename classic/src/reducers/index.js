import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import navState from './navState'

const rootReducer = combineReducers({
    navState,
    todos,
    visibilityFilter
})

export default rootReducer
