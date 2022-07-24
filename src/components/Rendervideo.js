import React from "react";

function Rendervideo({embedUrl}){
    console.log("embedUrl",embedUrl)
    return (
        <div className="App">
          <iframe
            width="919"
            height="525"
            src={embedUrl}
            frameBorder="0"
            allowFullScreen
            title="Thinking in React"
          />
        </div>
    )
}

export default Rendervideo