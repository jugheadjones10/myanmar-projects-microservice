import * as React from 'react'
import PropTypes from 'prop-types'

import ContentCard from "./ContentCard"

import { SHOW_MAIN } from '../constants/NavStates'

import "./UpdatesTab.css"

const UpdatesTab = ({ updates }) => (
    <div className="updates-tab">
        {
            updates
            .sort((a, b) => (a.date > b.date) ? -1 : 1)
            .map((x) => (
                //Properties in x: text, pictures, src, date, url
                <ContentCard { ...x } key={ x.text }/>
            ))
        }
    </div>
)

export default UpdatesTab;