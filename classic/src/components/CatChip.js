import * as React from 'react'

import "./CatChip.css"

export default class CatChip extends React.Component {
    render() {
        return (
            <div className="cat-chip" style={{backgroundColor: this.props.color}}>
                Water Well
            </div>
        )
    }
}
