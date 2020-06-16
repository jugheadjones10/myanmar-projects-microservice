import * as React from 'react'
import { Tooltip } from 'antd';

import "./TopBar.css"

import donate from "../icons/donate.svg"
import share from "../icons/share.svg"
import menu from "../icons/menu.svg"

const TopBar = () => (
    <div className="top-bar">
        <img className="menu-icon" src={ menu } />

        <Tooltip placement="bottom" title="Donate">
            <img className="donate-icon" src={ donate } />
        </Tooltip>

        <Tooltip placement="bottom" title="Share">
            <img className="share-icon" src={ share } />
        </Tooltip>
    </div>
)

export default TopBar