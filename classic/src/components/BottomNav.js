import * as React from 'react'
import PropTypes from 'prop-types'

import "./BottomNav.css"

import { SHOW_MAIN, SHOW_FEED } from '../constants/NavStates'

const BottomNav = ({onSetNavState, navState}) => (
    <div className="bottom-nav">
        <div
            className={navState === SHOW_MAIN ? "selected" : ""}
            onClick={() => onSetNavState(SHOW_MAIN)}
        >
            Overview
        </div>
        <div
            className={navState === SHOW_FEED ? "selected" : ""}
            onClick={() => onSetNavState(SHOW_FEED)}
        >
            Updates
        </div>
    </div>
)

BottomNav.propTypes = {
    navState: PropTypes.string.isRequired,
    onSetNavState: PropTypes.func.isRequired
}

export default BottomNav