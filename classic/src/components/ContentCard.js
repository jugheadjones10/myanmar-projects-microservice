import * as React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import { Tooltip } from 'antd'

import "./ContentCard.css"

import newLink from "../icons/external-link.svg"

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
}

const ContentCard =  ({ text, date, url, pictures }) => {

    return (
        <div className="content-card">

            <Slider {...settings}>
                {
                    pictures.map(pic => (
                        <div className="content-image" key={ pic }>
                            <img src={ pic } />
                        </div>
                    ))
                }
            </Slider>

            <div className="content-text">
                { text }
            </div>

            { 
                date &&
                <div className="date-tag">
                    { new Date(date).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }) }
                </div>  
            }

            {
                url &&
                <Tooltip placement="bottom" title="Open FB post">
                    <img
                        className="new-link-icon"
                        src={newLink}
                        onClick={() => window.open(url, "_blank")}
                    />
                </Tooltip>
            }       
        </div>
    )
}

export default ContentCard 