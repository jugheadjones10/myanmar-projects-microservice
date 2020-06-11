import * as React from 'react'

import "./ContentCard.css"

import dad from "../images/dad.jpg"

const ContentCard =  ({text, src}) => (
    // https://scontent.fsin1-1.fna.fbcdn.net/v/t1.0-9/s720x720/56517111_1016928258500271_8677474430743478272_o.jpg?_nc_cat=101&_nc_sid=110474&_nc_oc=AQlEK9zFD0V07WXV_pH1THakoJzxXtp5Q07yD-10Z0VsWL-s6oCltal-itgrG1PREmc&_nc_ht=scontent.fsin1-1.fna&_nc_tp=7&oh=2358f48ef56a98b945199fdd20c45b84&oe=5F0650D9
    <div className="content-card">
        <div className="content-image" style={{ backgroundImage: `url(${src})` }}/>
        <div className="content-text">
            {text}
            {/* The Crown House is owned by Mrs. Dickfinger, and she takes care of a total of 20 children. She works as a farmer, using what profits she has left to provide for the needs of the children and to give them some joy in life.  
            <br /><br />
            The Crown House is owned by Mrs. Dickfinger, and she takes care of a total of 20 children. She works as a farmer, using what profits she has left to provide for the needs of the children and to give them some joy in life.   */}
        </div>
    </div>
)

export default ContentCard 