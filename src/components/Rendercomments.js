import React, {useState} from "react";




function Rendercomments({comments}){

    const [buttonState,setButtonState] = useState(true)
    const commentLength=comments.length;
    
    function handleButton(){
        setButtonState(!buttonState)
        
    }


    function handleComment(){
        return ( comments.map((comment)=>{

            return (<div key={comment.id}>
                <h3>{comment.user}</h3>
                <>{comment.comment}</>
            </div>)
    }))
    
    }

    
return (<div>
            <h2>{commentLength} Comments</h2>    
            <button  onClick={handleButton}>{buttonState ? "Hide Comments":"Show Comments"}</button>
            <div style={buttonState ? {display:"block"}:{display:"none"}}>{handleComment()}</div>
            </div>
    )
}

export default Rendercomments