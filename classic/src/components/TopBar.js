import * as React from 'react'

import "./TopBar.css"

import donate from "../icons/donate.svg"
import share from "../icons/share.svg"
import menu from "../icons/menu.svg"

export default class SidePanel extends React.Component {
    render() {
        return (
            <div className="top-bar">
                <img className="menu-icon" src={menu}/>
                <img className="donate-icon" src={donate} />
                <img className="share-icon" src={share} />
            </div>
        )
    }
}
