import * as React from 'react'
import PropTypes from 'prop-types'

import ContentCard from "./ContentCard"

import { SHOW_MAIN } from '../constants/NavStates'

import "./UpdatesTab.css"

const UpdatesTab = ({ updates }) => (
    <div className="updates-tab">

        <ContentCard />
        <ContentCard />
        <ContentCard />
    </div>
)

// UpdatesTab.propTypes = {
// }

export default UpdatesTab;