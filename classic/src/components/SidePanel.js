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
    <TitleArea fullName={ project.fullName }/>

    <div className="content">
      {
        navState === SHOW_MAIN
        ?
          <>
            <ProgressCard target={15600} current={13800} />
            <ContentCard text={ project.description } src={ project.parsedUpdates[0].src }/>
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