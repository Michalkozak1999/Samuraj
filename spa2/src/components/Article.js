import React from "react";

const Article = (props) =>{
    const sytles = {
        marginTop: 40
    }
    return(
        <article style={sytles}>
            <h3 style={{
                marginBottom: "3px",
                TextTransform: "uppercase"
            }}>{props.title}</h3>
            <span style ={{
                marginBottom: "10px",
                display: "block",
                fontSize: "14px"
            }}>{props.author}</span>
            <p style ={{
                fontSize: "14px"
            }}>{props.text}</p>
        </article>
    )
}

export default Article