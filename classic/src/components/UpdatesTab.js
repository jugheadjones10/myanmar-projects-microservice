import * as React from 'react'
import PropTypes from 'prop-types'

import ContentCard from "./ContentCard"

import { SHOW_MAIN } from '../constants/NavStates'

import "./UpdatesTab.css"

const UpdatesTab = ({ updates }) => (
    <div className="updates-tab">
        {
            updates.map(({text, src}) => (
                <ContentCard text={ text } src={ src } key={ text }/>
            ))
        }
    </div>
)

// UpdatesTab.propTypes = {
// }

export default UpdatesTab;