import * as React from 'react'

import "./TitleArea.css"

import { getParentCategory, getCategoryColor } from "../constants/CategoryProps"
import CatChip from "./CatChip"

const TitleArea = ({ fullName, category }) => (

    <div className="title-area">
        <h1>
            { fullName }
        </h1>

        {
            category &&
            <div className="chip-holder">
                <CatChip color={getCategoryColor(category)} category={category} />
                <CatChip color={getParentCategory(category).color} category={getParentCategory(category).parentCat} />
            </div>
        }
        
    </div>
)

export default TitleArea