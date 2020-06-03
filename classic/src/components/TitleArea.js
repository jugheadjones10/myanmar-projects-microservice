import * as React from 'react'

import "./TitleArea.css"

import CatChip from "./CatChip"

export default class TitleArea extends React.Component {
    render() {
        return (
            <div className="title-area">
                <h1>
                    Crown House
                </h1>
                <div className="chip-holder">
                    <CatChip color={"#C6D69B"}/>
                    <CatChip color={"#E6AF2E"}/>
                </div>
            </div>
        )
    }
}
