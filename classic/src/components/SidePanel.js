import * as React from 'react'
import PropTypes from 'prop-types'

import TopBar from "./TopBar"
import TitleArea from "./TitleArea"
import ProgressCard from "./ProgressCard"
import ContentCard from "./ContentCard"
import BottomNav from "./BottomNav"
import UpdatesTab from "./UpdatesTab"

import { SHOW_MAIN } from '../constants/NavStates'

import "./SidePanel.css"

const SidePanel = ({ navState, project, actions }) => (
  <div className="side-panel">
    <TopBar />
    <TitleArea fullName={ project.fullName } category={ project.category }/>

    <div className="content">
      {
        navState === SHOW_MAIN
        ?
          <>
            { 
              project.donationCurrent &&
              <ProgressCard target={ project.donationTarget } current={ project.donationCurrent } />
            }
            <ContentCard text={ project.description } pictures={ project.parsedUpdates[0].pictures }/>
          </>
        : 
          <UpdatesTab updates={ project.parsedUpdates }/>
      }   
    </div>
    <BottomNav onSetNavState={actions.setNavState} navState={navState}/>
  </div>
)

SidePanel.propTypes = {
  navState: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired
}

export default SidePanel;