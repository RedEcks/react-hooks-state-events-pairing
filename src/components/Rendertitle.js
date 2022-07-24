import React from "react";

function Rendertitle({title,views,createdAt}){

    return(
        <div>
            <h1>{title}</h1>
            <>{views} Views | Uploaded {createdAt}</>
        </div>
        
    )

}


export default Rendertitle