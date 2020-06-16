import * as React from 'react'

import "./CatChip.css"

const CatChip = ({ color, category }) => (
    <div className="cat-chip" style={{ backgroundColor: color }}>
        { category }
    </div>
)

export default CatChip