import * as React from 'react'

import "./ProgressCard.css"

export default class ProgressCard extends React.Component {
    render() {
        var percentage = Math.round((this.props.current / this.props.target) * 100)
        
        return (
            <div className="progress-card">
                <div className="progress-top-container">
                    <div className="progress-bar">
                        <div className="progress-filler" style={{ width: `${percentage}%` }}></div>
                    </div>
                    <div className="progress-percent">
                        {percentage}%
                    </div>
                </div>
                <div className="progress-fraction">
                    <div>$13800</div><div>/$15600</div>
                </div>
            </div>
        )
    }
}
