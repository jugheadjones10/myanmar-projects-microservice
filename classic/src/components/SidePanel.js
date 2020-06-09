import * as React from 'react'
import PropTypes from 'prop-types'

import TopBar from "./TopBar"
import TitleArea from "./TitleArea"
import ProgressCard from "./ProgressCard"
import ContentCard from "./ContentCard"
import BottomNav from "./BottomNav"

import { SHOW_MAIN } from '../constants/NavStates'

import "./SidePanel.css"

const SidePanel = ({ navState, project, actions }) => (
  <div className="side-panel">
    <TopBar />
    <TitleArea project={project}/>

    <div className="content">
      {
        navState === SHOW_MAIN
        ?
          <>
            <ProgressCard target={15600} current={13800} />
            <ContentCard />
          </>
        : 
          <>
            <ContentCard />
            <ContentCard />
            <ContentCard />
          </>
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