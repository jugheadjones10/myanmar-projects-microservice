import * as React from 'react'

import "./TitleArea.css"

import CatChip from "./CatChip"

const TitleArea = ({ project }) => (
    <div className="title-area">
        <h1>
            {project.fullName}
        </h1>
        <div className="chip-holder">
            <CatChip color={"#C6D69B"}/>
            <CatChip color={"#E6AF2E"}/>
        </div>
    </div>
)

export default TitleArea