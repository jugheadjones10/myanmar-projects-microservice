import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import navState from './navState'
import projectState from "./projectState"

const rootReducer = combineReducers({
    navState,
    todos,
    projectState,
    visibilityFilter
})

export default rootReducer
