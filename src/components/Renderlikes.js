import React, {useState} from "react";

function HandleLikeDislikeButtons({likes,dislikes}){
    const [newLikes,setLikes]=useState(likes)
    const [newDislikes,setDislikes]=useState(dislikes)
        
        function handleLikes(){
            setLikes(newLikes+1)
    
        }
    
        function handleDislikes(){
            setDislikes(newDislikes + 1)
        }

        return(
            <div>
                <button onClick={handleLikes}>{newLikes} 👍</button>
                <button onClick={handleDislikes}>{newDislikes} 👎</button>
            </div>
        )

    }

export default HandleLikeDislikeButtons
