


import React from "react";

const SwitchButton = (props) =>{
    return(
        <div>
        <button 
        onClick={props.click}> 

        {props.showclick ? "stop":"start"}
        
        </button>


       <h1> {props.showclick}</h1>

        </div>


    )
}
export default SwitchButton


