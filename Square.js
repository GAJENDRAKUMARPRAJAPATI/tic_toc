import React from "react";

export default function Square(props)
{
    return(
        <div 
           onClick={props.onClick} 
           style={{
            border:"2px solid " ,
             height:"70px",
              width:"50%",
              display:"flex",
              justifyContent:"center",
              alignItems:"center"
            }} 
              className="square"
            >
            <h5>{props.value}</h5>
        </div>
    )
}