import { SET_NAV_STATE } from '../constants/ActionTypes'
import { SHOW_MAIN } from '../constants/NavStates'

const navState = (state = SHOW_MAIN, action) => {
    switch (action.type) {
        case SET_NAV_STATE:
            return action.navState
        default:
            return state
    }
}

export default navState