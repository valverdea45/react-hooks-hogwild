import React, { useState } from "react";

function Hog({ hog }) {
    
    const [isShowing, setIsShowing] = useState(false)

    const individualHogInfo =  
    <div>
        <p> Hog Specialty: {hog.specialty} Hog Weight: {hog.weight}Lb</p>
        <p> Hog Greased: {hog.greased ? "Yes" : "Not Greased"} Highest Medal Achieved: {hog["highest medal achieved"]}</p>
    </div>

function handleClick() {
    setIsShowing(!isShowing)
}


    return (
        <div>
            <h3 onClick={handleClick}>{hog.name}</h3>
            <p>{isShowing ? individualHogInfo : null}</p>
            <img src={hog.image} alt="" />
        </div>
    )
}

export default Hog